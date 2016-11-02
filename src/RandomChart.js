import SimpleRandomItemSelection from './selectionMethodologies/SimpleRandomItemSelection';
import ChartOutput from './models/ChartOutput';
import getRandomGenerator from './models/GetRandomGenerator';


export default class RandomChart {
  constructor(chartName, itemList, randomGenerator = getRandomGenerator(), itemSelectionMethod = new SimpleRandomItemSelection()) {
    this.chartName = chartName;
    this.items = itemList;
    this.random = randomGenerator;
    this.itemSelectionMethod = itemSelectionMethod;
  }

  get(times = 1) {
    const items = this.items;
    let selectedItems = [];
    for(let i = 0; i<times; i++) {
        selectedItems.push(this.itemSelectionMethod.getItem(items, this.random));
    }
    return new ChartOutput(selectedItems);
  }
}