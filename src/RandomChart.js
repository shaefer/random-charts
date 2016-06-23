class RandomChart {
  constructor(chartName, itemList, randomSeed, itemSelectionMethod = new SimpleRandomItemSelection()) {
    this.chartName = chartName;
    this.items = itemList;
    this.random = Math.random;

    if (Math.seedrandom) {
        if (randomSeed) {
          this.random = new Math.seedrandom(randomSeed);
          this.randomSeed = randomSeed;
        } else {
          this.random = new Math.seedrandom();
        }
    } else {
        console.warn("Math.seedrandom function is missing. Seedrandom library (https://github.com/davidbau/seedrandom) most likely has not been loaded. This will gracefully fallback to Math.random() behavior.");
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
}