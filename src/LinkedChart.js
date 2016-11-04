import SimpleRandomItemSelection from './selectionMethodologies/SimpleRandomItemSelection';
import RandomChart from './RandomChart';
import ChartOutput from './models/ChartOutput';
import getRandomGenerator from './models/GetRandomGenerator';

const isArray = (o) => {
    return Object.prototype.toString.call(o) === '[object Array]';
};

const convertToResult = (parentIndex, i) => {
    return {index:parentIndex, result:i};
};

export default class LinkedChart {
    constructor(chartName, items, subTables, randomGenerator = getRandomGenerator(), itemSelectionMethod = new SimpleRandomItemSelection()) {
        this.chartName = chartName;
        this.items = items;
        let linkedCharts = {};
        subTables.forEach(function(table) {
          if (table.linked)
            linkedCharts[table.name] = new LinkedChart(table.name, table.items, table.subTables, randomGenerator, itemSelectionMethod);
          else
            linkedCharts[table.name] = new RandomChart(table.name, table.items, randomGenerator, itemSelectionMethod);
        });
        linkedCharts[chartName] = this; //add reference to self so that tables can tell you to roll twice on this table.
        this.linkedCharts = linkedCharts;

        this.random = randomGenerator;
        this.itemSelectionMethod = itemSelectionMethod;
    }

    addChartName(chartName, item) {
        item.chartName = chartName;
    }

    addLinkedChartResultsToSelectedItems(item, selectedItems) {
        if (item.result.linkedTable) {
            let subResults = this.linkedCharts[item.result.linkedTable].get(item.result.times);
            subResults.results.map(this.addChartName.bind(null, item.result.linkedTable));
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