import SimpleRandomItemSelection from './selectionMethodologies/SimpleRandomItemSelection'
import seedrandom from 'seedrandom'
import RandomChart from './RandomChart'

export default class LinkedChart {
    constructor(chartName, items, subTables, randomSeed, itemSelectionMethod = new SimpleRandomItemSelection()) {
        this.chartName = chartName;
        this.items = items;
        let linkedCharts = {};
        subTables.forEach(function(table) {
          if (table.linked)
            linkedCharts[table.name] = new LinkedChart(table.name, table.items, table.subTables, randomSeed, itemSelectionMethod);
          else
            linkedCharts[table.name] = new RandomChart(table.name, table.items, randomSeed, itemSelectionMethod);
        });
        linkedCharts[chartName] = this; //add reference to self so that tables can tell you to roll twice on this table.
        this.linkedCharts = linkedCharts;

        if (randomSeed) {
            this.random = seedrandom(randomSeed);
            this.randomSeed = randomSeed;
        } else {
            this.random = seedrandom();
        }

        this.itemSelectionMethod = itemSelectionMethod;
    }

    get(times = 1) {
        const items = this.items;
        let selectedItems = [];
        for(let i = 0;i<times;i++) {
            let item = this.itemSelectionMethod.getItem(items, this.random);
            if (item.item.linkedTable) {
                //item.linkDescription will have the text `Roll on Table "Magic Items"`
                item.subResults = this.linkedCharts[item.item.linkedTable].get(item.item.times || 1);
            }
            selectedItems.push(item);
        }
        //flatten deep results
        return {results: selectedItems};
    }
};