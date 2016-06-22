describe('ChainableChart', function() {
  describe('create', function () {
    it('should create a new class that can be instantiated and results returned', function() {
      var chart = ChainableChart.create("myChart", ["One1", "Two2", "Three3"]);
      var amount = 3;
      RandomChartSpec.verifyGet(chart, amount);
      RandomChartSpec.verifyMultipleGet(chart, amount);
      RandomChartSpec.verifyGetAll(chart, amount);
    });
  });
});