import SimpleRandomItemSelection from './selectionMethodologies/SimpleRandomItemSelection';
import ChartOutput from './models/ChartOutput';
import ChartData from './models/ChartData';
import getRandomGenerator from './models/GetRandomGenerator';

export default class RandomChart {
    constructor(tables, randomGenerator = getRandomGenerator(), itemSelectionMethod = new SimpleRandomItemSelection()) {
        tables = isValidTableData(tables);
        if (tables instanceof ChartData) tables = [tables];

        const mainTable = tables[0]; //assumes first table is main table to roll on. I don't like the assumption.
        this.chartName = mainTable.name;
        this.items = mainTable.items;
        this.random = randomGenerator;
        this.itemSelectionMethod = itemSelectionMethod;

        this.linkedCharts = buildMapOfChartsByName(tables, this);
    }

    addChartName(chartName, item) {
        item.chartName = chartName;
    }

    addParentIndex(parentIndex, item) {
        item.parentIndex = parentIndex;
    }

    addLinkedChartResultsToSelectedItems(item, selectedItems) {
        if (item.result.linkedTable) {
            let subResults = this.linkedCharts[item.result.linkedTable].get(item.result.times);
            subResults.results.map(this.addChartName.bind(null, item.result.linkedTable));
            subResults.results.map(this.addParentIndex.bind(null, item.index));
            Array.prototype.push.apply(selectedItems, subResults.results);
        } else {
            this.addChartName(this.chartName, item);
            selectedItems.push(item);
        }
    }

    get(times = 1) {
        const items = this.items;
        let selectedItems = [];
        for(let i = 0;i<times;i++) {
            let item = this.itemSelectionMethod.getItem(items, this.random);
            /**
             * Some charts return multiple results per entry. This helps with items that have multiple dice rolls such as a
             * result with gold, silver, copper, and an art object. Complex charts.
             */
            if (isArray(item.result)) {
                const multiItemResults = item.result.map(convertToResult.bind(null, item.index));
                multiItemResults.forEach((mir) => {
                    this.addLinkedChartResultsToSelectedItems(mir, selectedItems);
                });
            }
            else {
                this.addLinkedChartResultsToSelectedItems(item, selectedItems);
            }
        }
        return new ChartOutput(selectedItems);
    }
}

const isArray = (o) => {
    return Object.prototype.toString.call(o) === '[object Array]';
};

const convertToResult = (parentIndex, i) => {
    return {index:parentIndex, result:i};
};

const isChartData = (item) => {
    return item instanceof ChartData;
};

const isValidTableData = (tables) => {
    if (isChartData(tables)) return tables;
    if (isArray(tables)) {
        return tables.map(ChartData.toChartData);
    } else {
        return ChartData.toChartData(tables);
    }
};

const buildMapOfChartsByName = (tables, chart) => {
    let linkedCharts = {};
    if (tables.length > 1) {
        tables.forEach(function (table) {
            if (table.tables)
                linkedCharts[table.name] = new RandomChart(table.tables, chart.random, chart.itemSelectionMethod);
            else //self referencing table
                linkedCharts[table.name] = new RandomChart([table], chart.random, chart.itemSelectionMethod);
        });
    }
    linkedCharts[chart.chartName] = chart; //add reference for self-linking tables.
    return linkedCharts;
};