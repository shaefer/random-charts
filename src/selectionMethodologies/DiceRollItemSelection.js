module.exports = class DiceRollItemSelection {
  constructor(numOfDice, numOfSides) {
    this.numOfDice = numOfDice;
    this.numOfSides = numOfSides;
  }

  add(a, b) {
      return a + b;
  }

  rollDice(numOfDice, numOfSides, random) {
    var diceRolled = [];
    for(var i = 0;i<numOfDice;i++) {
      var dieRoll = Math.floor(random() * numOfSides) + 1;
      diceRolled.push(dieRoll);
    }

    var sum = diceRolled.reduce(this.add, 0);
    var result = {total: sum, diceRolled: diceRolled};
    return result;
  }

  getItem(items, random) {
    var numOfDice = this.numOfDice;
    var numOfSides = this.numOfSides;
    var numOfItemsPossibleWithDice = (numOfDice * numOfSides) - numOfDice + 1;
    if (numOfItemsPossibleWithDice != items.length)
      throw new Error("A chart of "+numOfDice+"d"+numOfSides+" items should have "+numOfItemsPossibleWithDice+" items. You have specified "+items.length+".");

    var results = this.rollDice(numOfDice, numOfSides, random);
    var index = results.total - numOfDice;
    var item = items[index];
    return {index:index, item:item, rollResults:results};
  }
};