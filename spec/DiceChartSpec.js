function CreateDemoDiceChart(chartName) {
  var seed = "Fixed";
  var items = ["One1", "Two2", "Three3", "Four4", "Five5", "Six6", "Seven7"];
  var numOfDice = 2;
  var numOfSides = 4;
  return new DiceChart(chartName, numOfDice, numOfSides, items, seed);
}

function CreateDemoDiceChartWithMismatchedItemCountAndDice() {
  var items = ["One1", "Two2", "Three3", "Four4"];
  var numOfDice = 2;
  var numOfSides = 4;
  return new DiceChart("DiceChartWithMismatchedItemCountAndDice", numOfDice, numOfSides, items);
}

describe('DiceChart', function() {
  describe('get', function () {
    it('should return results returned by a dice roll', function() {
      var chart = CreateDemoDiceChart("someDiceChart1");
      var item = chart.get();
      expect(item).to.be.ok;
      var expectedResult = {index:2, item:"Three3", rollResults:{total:4, diceRolled:[3,1]}}
      expect(item[0]).to.eql(expectedResult);
    });
    it('should get Multiple just like a random chart.', function() {
      var chart = CreateDemoDiceChart("someDiceChart2");
      RandomChartSpec.verifyMultipleGet(chart, 3);
    });
    it('should throw an error if the items do not match the dice combinations', function() {
      expect(CreateDemoDiceChartWithMismatchedItemCountAndDice).to.throw(/A chart of 2d4 items should have 7 items. You have specified 4./);
    });
  });
});

describe('DiceChartFunctions', function() {
  describe('rollDice', function () {
    it('should roll dice and create result object with total and individual die results.', function() {
      var chart = CreateDemoDiceChart("ChartForRollTest")
      var results = chart.rollDice(2, 6);
      expect(results.diceRolled.length).to.eql(2);
      expect(results.diceRolled[0]).to.eql(4);
      expect(results.diceRolled[1]).to.eql(2);
      expect(results.total).to.eql(6);
    });
  });
  describe('add', function () {
    it('should add two numbers together', function() {
      var chart = CreateDemoDiceChart("ChartForRollTest")
      var result = chart.add(2, 6);
      expect(result).to.eql(8);
    });
  });
});