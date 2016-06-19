describe('RandomChart', function() {
  describe('create', function () {
    it('should create a new class that can be instantiated and results returned', function() {
      var chart = RandomChart.create("myChart", ["One1", "Two2", "Three3"]);
      var amount = 3;
      RandomChartSpec.verifyGet(chart, amount);
      RandomChartSpec.verifyMultipleGet(chart, amount);
      RandomChartSpec.verifyGetAll(chart, amount);
    });
  });
});

describe('ChartsWithRandomSeed', function() {
   describe('get()', function() {
    it('charts with same seed should return same result', function() {
       var seed = "Fixed";
       var items = ["One1", "Two2", "Three3"];
       var chart1 = RandomChart.create("chart1", items, seed);
       var chart2 = RandomChart.create("chart2", items, seed);
      expect(chart1.get()).to.eql(chart2.get());
      expect(RandomChart.chartNames.indexOf("chart1")).to.not.eql(-1);
      expect(RandomChart.chartNames.indexOf("chart2")).to.not.eql(-1);
    });
  });
  describe('getRandomSeed()', function() {
    it('should return given seed', function() {
       var seed = "Fixed";
       var items = ["One1", "Two2", "Three3"];
       var chart1 = RandomChart.create("chart1", items, seed);
       var chart2 = RandomChart.create("chart2", items, seed);
      expect(chart1.getRandomSeed()).to.eql(seed);
      expect(chart2.getRandomSeed()).to.eql(seed);
    });
  });
});