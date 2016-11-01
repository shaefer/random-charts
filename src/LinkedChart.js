import seedrandom from 'seedrandom';
import SimpleRandomItemSelection from './selectionMethodologies/SimpleRandomItemSelection';
import RandomChart from './RandomChart';
import ChartOutput from './models/ChartOutput';

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
            this.random = new seedrandom(randomSeed);
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
            item.chartName = this.chartName;
            selectedItems.push(item);

            /**If item has a linkedTable roll on the deeper table. If there are multiple items in the result we need to
            handle this too by pushing all the ready to go results to the list as well as the deeper roll **/
            if (item.result.linkedTable) {
                //item.linkDescription will have the text `Roll on Table "Magic Items"`
                let subResults = this.linkedCharts[item.result.linkedTable].get(item.result.times);
                Array.prototype.push.apply(selectedItems, subResults.results);
            }
        }
        return new ChartOutput(selectedItems);
    }
}