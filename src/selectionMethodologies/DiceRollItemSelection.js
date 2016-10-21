export function add(a, b) {
    return a + b;
}

export function rollDice(numOfDice, numOfSides, random) {
    let diceRolled = [];
    for(let i = 0; i<numOfDice; i++) {
        const dieRoll = Math.floor(random() * numOfSides) + 1;
        diceRolled.push(dieRoll);
    }

    const sum = diceRolled.reduce(add, 0);
    const result = {total: sum, diceRolled: diceRolled};
    return result;
}

export default class DiceRollItemSelection {
  constructor(numOfDice, numOfSides) {
    this.numOfDice = numOfDice;
    this.numOfSides = numOfSides;
  }

  getItem(items, random) {
    const numOfDice = this.numOfDice;
    const numOfSides = this.numOfSides;
    const numOfItemsPossibleWithDice = (numOfDice * numOfSides) - numOfDice + 1;
    if (numOfItemsPossibleWithDice != items.length)
      throw new Error("A chart of "+numOfDice+"d"+numOfSides+" items should have "+numOfItemsPossibleWithDice+" items. You have specified "+items.length+".");

    const results = rollDice(numOfDice, numOfSides, random);
    const index = results.total - numOfDice;
    const item = items[index];
    return {index:index, item:item, rollResults:results};
  }
};