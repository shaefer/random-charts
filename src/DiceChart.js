class DiceChart extends RandomChart {
  constructor(chartName, numOfDice, numOfSides, itemList, randomSeed) {
    var numOfItemsPossibleWithDice = (numOfDice * numOfSides) - numOfDice + 1;
    if (numOfItemsPossibleWithDice != itemList.length)
      throw new Error("A chart of "+numOfDice+"d"+numOfSides+" items should have "+numOfItemsPossibleWithDice+" items. You have specified "+itemList.length+".");

    super(chartName, itemList, randomSeed);
    this.numOfDice = numOfDice;
    this.numOfSides = numOfSides;
  }

  add(a, b) {
      return a + b;
  }

  rollDice(numOfDice, numOfSides) {
    var diceRolled = [];
    for(var i = 0;i<numOfDice;i++) {
      var dieRoll = Math.floor(this.random() * numOfSides) + 1;
      diceRolled.push(dieRoll);
    }

    var sum = diceRolled.reduce(this.add, 0);
    var result = {total: sum, diceRolled: diceRolled};
    return result;
  }

  getItem() {
    var numOfDice = this.numOfDice;
    var results = this.rollDice(numOfDice, this.numOfSides);
    var index = results.total - numOfDice;
    var item = this.items[index];
    return {index:index, item:item, rollResults:results};
  }
}