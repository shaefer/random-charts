var RandomChart = {
    items:[],
    random: Math.random,
    randomSeed: 0,
    chartNames: [],
    get: function(times) {
        var items = this.items;
        if (!times) times = 1;
        var selectedItems = [];
        for(var i = 0;i<times;i++) {
            var index = Math.floor(this.random() * items.length);
            var item = items[index];
            selectedItems.push({index:index, text:item});
        }

        return selectedItems;
    },
    getAll: function() {
        return this.items;
    },
    getRandomSeed: function() {
        return this.randomSeed;
    },
    setItems: function(items) {
        this.items = items;
    },
    setRandomSeed: function(randomSeed) {
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
    },
    reset: function() {
        for(var i = RandomChart.chartNames.length; i--;) {
            delete RandomChart[RandomChart.chartNames[i]];
            RandomChart.chartNames.splice(i, 1);
        }
    }
};

RandomChart.create = function(chartName, itemList, randomSeed) {
    var chart = Object.create(RandomChart);
    chart.setItems(itemList);
    if (randomSeed)
        chart.setRandomSeed(randomSeed);
    RandomChart[chartName] = chart;
    RandomChart.chartNames.push(chartName);
    return chart;
};