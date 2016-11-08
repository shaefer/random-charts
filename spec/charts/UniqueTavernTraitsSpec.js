const uniqueTavernTraits = require('../../data/charts/UniqueTavernTraits.json');
import LinkedChart from '../../src/LinkedChart'
import * as RandomChartSpec from '../RandomChartSpecHelper'
import { expect } from 'chai'

describe('UniqueTavernTraits', function() {
  it('should return same result', function() {
    const chart = new LinkedChart([{name:'UniqueTavernTraits', items:uniqueTavernTraits}]);
    RandomChartSpec.verifyGet(chart);
    RandomChartSpec.verifyMultipleGet(chart, 3);
    expect(chart.items.length).to.eql(45);
  });
});