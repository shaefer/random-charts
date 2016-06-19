function CreateDemoDiceChart() {
  var seed = "Fixed";
  var items = ["One1", "Two2", "Three3", "Four4", "Five5", "Six6", "Seven7"];
  var numOfDice = 2;
  var numOfSides = 4;
  return DiceChart.create(numOfDice, numOfSides, items, seed);
}

function CreateDemoDiceChartWithMismatchedItemCountAndDice() {
  var items = ["One1", "Two2", "Three3", "Four4"];
  var numOfDice = 2;
  var numOfSides = 4;
  DiceChart.create(numOfDice, numOfSides, items);
}

describe('DiceChart', function() {
  describe('create', function () {
    it('should create a new class that can be instantiated and results returned by a dice roll', function() {
      var chart = CreateDemoDiceChart();
      var item = chart.get();
      expect(item).to.be.ok;
      expect(item.rollResults.total).to.eql(4);
    });
    it('should throw an error if the items do not match the dice combinations', function() {
      expect(CreateDemoDiceChartWithMismatchedItemCountAndDice).to.throw(/A chart of 2d4 items should have 7 items. You have specified 4./);
    });
  });
});

describe('DiceChartFunctions', function() {
  describe('rollDice', function () {
    it('should roll dice and create result object with total and individual die results.', function() {
      var random = new Math.seedrandom("Fixed");
      var results = DiceChart.rollDice(2, 6, random);
      expect(results.diceRolled.length).to.eql(2);
      expect(results.diceRolled[0]).to.eql(4);
      expect(results.diceRolled[1]).to.eql(2);
      expect(results.total).to.eql(6);
    });
  });
  describe('add', function () {
    it('should add two numbers together', function() {
      var result = DiceChart.add(2, 6);
      expect(result).to.eql(8);
    });
  });
});