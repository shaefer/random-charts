if (!Math.seedrandom) console.warn("Math.seedrandom function is missing. Seedrandom library (https://github.com/davidbau/seedrandom) most likely has not been loaded. This will gracefully fallback to Math.random() behavior.");
function RandomChart(myItems, randomSeed) {
	var items = myItems;
	var random = utilizeRandomSeedFunctionalityOrFallbackToMathDotRandom(randomSeed);

	this.get = function(times) {
		if (!times) times = 1;
		var selectedItems = [];
		for(var i = 0;i<times;i++) {
			var index = Math.floor(random() * items.length);
			var item = items[index];
			selectedItems.push({index:index, text:item});
		}
		
		return selectedItems;
	};

	this.getAll = function() {
		return items;
	};
}

function utilizeRandomSeedFunctionalityOrFallbackToMathDotRandom(randomSeed) {
  var random = Math.random;
	if (Math.seedrandom) {
    if (randomSeed) {
      random = new Math.seedrandom(randomSeed);
    } else {
      Math.seedrandom();
    }
	}
	return random;
}

RandomChart.create = function(className, itemList) {
	window[className] = function(randomSeed) {
		RandomChart.call(this, itemList, randomSeed);
	};
	window[className].prototype = Object.create(RandomChart.prototype);
};