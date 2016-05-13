function CreateDemoDiceChart() {
  var items = ["One1", "Two2", "Three3", "Four4", "Five5", "Six6", "Seven7"];
  var numOfDice = 2;
  var numOfSides = 4;
  DiceChart.create("NewChartClassName2", numOfDice, numOfSides, items);
}

function CreateDemoDiceChartWithMismatchedItemCountAndDice() {
  var items = ["One1", "Two2", "Three3", "Four4"];
  var numOfDice = 2;
  var numOfSides = 4;
  DiceChart.create("DiceChartSample3", numOfDice, numOfSides, items);
}

describe('DiceChart', function() {
  describe('create', function () {
    it('should create a new class that can be instantiated and results returned by a dice roll', function() {
      CreateDemoDiceChart();
      var chart = new NewChartClassName2("Fixed");
      var item = chart.get();
      expect(item[0].rollResults.total).to.eql(4);
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