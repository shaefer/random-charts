var TavernMenuItemsWithPrices = require('../../src/charts/TavernMenuItemsWithPrices'),
    RandomChartSpec = require('../RandomChartSpecHelper'),
    expect = require('chai').expect;

describe('TavernMenuItemsWithPrices', function() {
  it('should return same result', function() {
    var chart = new TavernMenuItemsWithPrices();
    RandomChartSpec.verifyGet(chart);
    RandomChartSpec.verifyMultipleGet(chart, 3);
    expect(chart.items.length).to.eql(6);
  });
});