var DiceChart = Object.create(RandomChart);
DiceChart.add = function(a, b) {
    return a + b;
};

DiceChart.rollDice = function(numOfDice, numOfSides, random) {
  var diceRolled = [];
  for(var i = 0;i<numOfDice;i++) {
    var dieRoll = Math.floor(random() * numOfSides) + 1;
    diceRolled.push(dieRoll);
  }

  var sum = diceRolled.reduce(DiceChart.add, 0);
  var result = {total: sum, diceRolled: diceRolled};
  return result;
};

DiceChart.create = function(numOfDice, numOfSides, itemList, randomSeed) {
  var numOfItemsPossibleWithDice = (numOfDice * numOfSides) - numOfDice + 1;
  if (numOfItemsPossibleWithDice != itemList.length)
    throw new Error("A chart of "+numOfDice+"d"+numOfSides+" items should have "+numOfItemsPossibleWithDice+" items. You have specified "+itemList.length+".");

    var diceChart = RandomChart.create("myDiceChart", itemList, randomSeed);

	diceChart.get = function(items) {
        var results = DiceChart.rollDice(numOfDice, numOfSides, diceChart.random);
        var index = results.total - numOfDice;
        var item = diceChart.items[index];
        return {index:index, text:item, rollResults:results};
	};

	return diceChart;
};