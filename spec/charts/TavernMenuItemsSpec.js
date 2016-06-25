var tavernMenuItems = require('../../data/charts/TavernMenuItems.json'),
    RandomChart = require('../../src/RandomChart'),
    RandomChartSpec = require('../RandomChartSpecHelper'),
    expect = require('chai').expect;

describe('TavernMenuItems', function() {
  it('should return same result', function() {
    var chart = new RandomChart('TavernMenuItems', tavernMenuItems);
    RandomChartSpec.verifyGet(chart);
    RandomChartSpec.verifyMultipleGet(chart, 3);
    expect(chart.items.length).to.eql(50);
  });
});