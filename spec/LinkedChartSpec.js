var LinkedChart = require('../src/LinkedChart'),
    RandomChartSpec = require('./RandomChartSpecHelper');

describe('ChainableChart', function() {
  describe('create', function () {
    it('should create a new class that can be instantiated and results returned', function() {
      var chart = new LinkedChart("myChart", ["One1", "Two2", "Three3"]);
      var amount = 3;
      RandomChartSpec.verifyGet(chart, amount);
      RandomChartSpec.verifyMultipleGet(chart, amount);
    });
  });
});