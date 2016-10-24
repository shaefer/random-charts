const tavernMenuItemsWithPrices = require('../../data/charts/TavernMenuItemsWithPrices.json');
import RandomChart from '../../src/RandomChart'
import * as RandomChartSpec from '../RandomChartSpecHelper'
import { expect } from 'chai'


describe('TavernMenuItemsWithPrices', function() {
  it('should return same result', function() {
    const chart = new RandomChart('TavernMenuItemsWithPrices', tavernMenuItemsWithPrices);
    RandomChartSpec.verifyGet(chart);
    RandomChartSpec.verifyMultipleGet(chart, 3);
    expect(chart.items.length).to.eql(6);
  });
});