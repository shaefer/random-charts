const uniqueTavernTraits = require('../../data/charts/UniqueTavernTraits.json');
import RandomChart from '../../src/RandomChart'
import * as RandomChartSpec from '../RandomChartSpecHelper'
import { expect } from 'chai'

describe('UniqueTavernTraits', function() {
  it('should return same result', function() {
    const chart = new RandomChart([{name:'UniqueTavernTraits', items:uniqueTavernTraits}]);
    RandomChartSpec.verifyGet(chart);
    RandomChartSpec.verifyMultipleGet(chart, 3);
    expect(chart.items.length).to.eql(45);
  });
});