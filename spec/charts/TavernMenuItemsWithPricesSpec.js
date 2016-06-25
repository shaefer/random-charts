var tavernMenuItemsWithPrices = require('../../data/charts/TavernMenuItemsWithPrices.json'),
    RandomChart = require('../../src/RandomChart'),
    RandomChartSpec = require('../RandomChartSpecHelper'),
    expect = require('chai').expect;

describe('TavernMenuItemsWithPrices', function() {
  it('should return same result', function() {
    var chart = new RandomChart('TavernMenuItemsWithPrices', tavernMenuItemsWithPrices);
    RandomChartSpec.verifyGet(chart);
    RandomChartSpec.verifyMultipleGet(chart, 3);
    expect(chart.items.length).to.eql(6);
  });
});