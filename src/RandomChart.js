var SimpleRandomItemSelection = require('./selectionMethodologies/SimpleRandomItemSelection'),
    seedrandom = require('seedrandom');

module.exports = class RandomChart {
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
    var items = this.items;
    var selectedItems = [];
    for(var i = 0;i<times;i++) {
        selectedItems.push(this.itemSelectionMethod.getItem(items, this.random));
    }
    return selectedItems;
  }
};