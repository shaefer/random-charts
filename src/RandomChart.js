import SimpleRandomItemSelection from './selectionMethodologies/SimpleRandomItemSelection';
import seedrandom from 'seedrandom';
import ChartOutput from './models/ChartOutput';

export default class RandomChart {
  constructor(chartName, itemList, randomSeed, itemSelectionMethod = new SimpleRandomItemSelection()) {
    this.chartName = chartName;
    this.items = itemList;

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
    for(let i = 0; i<times; i++) {
        selectedItems.push(this.itemSelectionMethod.getItem(items, this.random));
    }
    return new ChartOutput(this.chartName, selectedItems, times);
  }
}