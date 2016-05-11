function CreateDemoChart() {
  var items = ["One1", "Two2", "Three3"];
  RandomChart.create("NewChartClassName", items);
}

describe('RandomChart', function() {
  describe('create', function () {
    it('should create a new class that can be instantiated and results returned', function() {
      CreateDemoChart();
      var chart = new NewChartClassName();
      var amount = 3;
      RandomChartSpec.verifyGet(chart, amount);
      RandomChartSpec.verifyMultipleGet(chart, amount);
      RandomChartSpec.verifyGetAll(chart, amount);
    });
  });
});

describe('ChartsWithRandomSeed', function() {
  CreateDemoChart();

  var seed = "Fixed";
  var chart1 = new NewChartClassName(seed);
  var chart2 = new NewChartClassName(seed);

  describe('get()', function() {
    it('charts with same seed should return same result', function() {
      expect(chart1.get()).to.eql(chart2.get());
    });
  });
  describe('getRandomSeed()', function() {
    it('should return given seed', function() {
      expect(chart1.getRandomSeed()).to.eql(seed);
      expect(chart2.getRandomSeed()).to.eql(seed);
    });
  });
});