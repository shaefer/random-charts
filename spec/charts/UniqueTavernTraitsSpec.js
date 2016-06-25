var uniqueTavernTraits = require('../../data/charts/UniqueTavernTraits.json'),
    RandomChart = require('../../src/RandomChart'),
    RandomChartSpec = require('../RandomChartSpecHelper'),
    expect = require('chai').expect;

describe('UniqueTavernTraits', function() {
  it('should return same result', function() {
    var chart = new RandomChart('UniqueTavernTraits', uniqueTavernTraits);
    RandomChartSpec.verifyGet(chart);
    RandomChartSpec.verifyMultipleGet(chart, 3);
    expect(chart.items.length).to.eql(45);
  });
});