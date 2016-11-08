import SimpleRandomItemSelection from './selectionMethodologies/SimpleRandomItemSelection';
import ChartOutput from './models/ChartOutput';
import getRandomGenerator from './models/GetRandomGenerator';

const isArray = (o) => {
    return Object.prototype.toString.call(o) === '[object Array]';
};

const convertToResult = (parentIndex, i) => {
    return {index:parentIndex, result:i};
};

export default class LinkedChart {
    constructor(tables, randomGenerator = getRandomGenerator(), itemSelectionMethod = new SimpleRandomItemSelection()) {
        const mainTable = tables[0];
        this.chartName = mainTable.name;
        this.items = mainTable.items;
        let linkedCharts = {};
        if (tables.length > 1) {
            tables.forEach(function (table) {
                if (table.linked) {
                    if (table.tables)
                        linkedCharts[table.name] = new LinkedChart(table.tables, randomGenerator, itemSelectionMethod);
                    else //self referencing table
                        linkedCharts[table.name] = new LinkedChart([table], randomGenerator, itemSelectionMethod);
                }
                else
                    linkedCharts[table.name] = new LinkedChart([table], randomGenerator, itemSelectionMethod);
            });
        }
        linkedCharts[this.chartName] = this; //add reference to self so that tables can tell you to roll twice on this table.
        this.linkedCharts = linkedCharts;

        this.random = randomGenerator;
        this.itemSelectionMethod = itemSelectionMethod;
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