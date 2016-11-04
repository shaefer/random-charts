import SimpleRandomItemSelection from './selectionMethodologies/SimpleRandomItemSelection';
import ChartOutput from './models/ChartOutput';
import getRandomGenerator from './models/GetRandomGenerator';

const isArray = (o) => {
    return Object.prototype.toString.call(o) === '[object Array]';
};

const convertToResult = (parentIndex, i) => {
    return {index:parentIndex, result:i};
};

export default class RandomChart {
  constructor(chartName, itemList, randomGenerator = getRandomGenerator(), itemSelectionMethod = new SimpleRandomItemSelection()) {
    this.chartName = chartName;
    this.items = itemList;
    this.random = randomGenerator;
    this.itemSelectionMethod = itemSelectionMethod;
  }

  addChartName(chartName, item) {
      item.chartName = chartName;
  }

  get(times = 1) {
    const items = this.items;
    let selectedItems = [];
    for(let i = 0; i<times; i++) {

        let item = this.itemSelectionMethod.getItem(items, this.random);
        /**
         * Some charts return multiple results per entry. This helps with items that have multiple dice rolls such as a
         * result with gold, silver, copper, and an art object. Complex charts.
         */
        if (isArray(item.result)) {
            const multiItemResults = item.result.map(convertToResult.bind(null, item.index));
            multiItemResults.map(this.addChartName.bind(null, this.chartName));
            Array.prototype.push.apply(selectedItems, multiItemResults);
        }
        else {
            this.addChartName(this.chartName, item);
            selectedItems.push(item);
        }
    }
    return new ChartOutput(selectedItems);
  }
}