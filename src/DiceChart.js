if (!Math.seedrandom) console.warn("Math.seedrandom function is missing. Seedrandom library (https://github.com/davidbau/seedrandom) most likely has not been loaded. This will gracefully fallback to Math.random() behavior.");
function DiceChart(myItems, randomSeed) {
	var items = myItems;
	var random = utilizeRandomSeedFunctionalityOrFallbackToMathDotRandom(randomSeed);

	this.get = function(times) {
		if (!times) times = 1;
		var selectedItems = [];
		for(var i = 0;i<times;i++) {
			selectedItems.push(this.getSelectedItem(items, random));
		}

		return selectedItems;
	};

	this.getAll = function() {
		return items;
	};

	this.getRandomSeed = function() {
	  return randomSeed;
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

DiceChart.add = function(a, b) {
    return a + b;
}

DiceChart.rollDice = function(numOfDice, numOfSides, random) {
  var diceRolled = [];
  for(var i = 0;i<numOfDice;i++) {
    var dieRoll = Math.floor(random() * numOfSides) + 1;
    diceRolled.push(dieRoll);
  }

  var sum = diceRolled.reduce(DiceChart.add, 0);
  var result = {total: sum, diceRolled: diceRolled};
  return result;
}

DiceChart.create = function(className, numOfDice, numOfSides, itemList) {
  var numOfItemsPossibleWithDice = (numOfDice * numOfSides) - numOfDice + 1;
  if (numOfItemsPossibleWithDice != itemList.length)
    throw new Error("A chart of "+numOfDice+"d"+numOfSides+" items should have "+numOfItemsPossibleWithDice+" items. You have specified "+itemList.length+".")

	window[className] = function(randomSeed) {
		DiceChart.call(this, itemList, randomSeed);
	};

	var diceChartPrototype = Object.create(DiceChart.prototype);
	diceChartPrototype.getSelectedItem = function(items, random) {
    var results = DiceChart.rollDice(numOfDice, numOfSides, random);
    var index = results.total - numOfDice;
    var item = items[index];
    return {index:index, text:item, rollResults:results};
	};

	window[className].prototype = diceChartPrototype;
};