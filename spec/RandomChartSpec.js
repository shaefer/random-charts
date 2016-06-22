describe('RandomChart', function() {
  describe('create', function () {
    it('should create a new class that can be instantiated and results returned', function() {
      var chart = new RandomChart("myChart", ["One1", "Two2", "Three3"]);
      RandomChartSpec.verifyGet(chart);
      RandomChartSpec.verifyMultipleGet(chart, 3);
      expect(chart.randomSeed).to.be.an('undefined');
    });
  });
});

describe('ChartsWithRandomSeed', function() {
   describe('get()', function() {
    it('charts with same seed should return same result', function() {
       var seed = "Fixed";
       var items = ["One1", "Two2", "Three3"];
       var chart1 = new RandomChart("chart1", items, seed);
       var chart2 = new RandomChart("chart2", items, seed);
      expect(chart1.get()).to.eql(chart2.get());
    });
  });
  describe('get(3)', function() {
    it('should return 3 results', function() {
       var seed = "Fixed";
       var items = ["One1", "Two2", "Three3"];
       var chart1 = new RandomChart("chart1", items, seed);
       var chart2 = new RandomChart("chart2", items, seed);
       var chart1Results = chart1.get(3);
       var chart2Results = chart2.get(3)
       expect(chart1Results).to.eql(chart2Results);
    });
  });
  describe('getRandomSeed()', function() {
    it('should return given seed', function() {
       var seed = "Fixed";
       var items = ["One1", "Two2", "Three3"];
       var chart1 = new RandomChart("chart1", items, seed);
       var chart2 = new RandomChart("chart2", items, seed);
      expect(chart1.randomSeed).to.eql(seed);
      expect(chart2.randomSeed).to.eql(seed);
    });
  });
});