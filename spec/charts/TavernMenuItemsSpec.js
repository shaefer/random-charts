const tavernMenuItems = require('../../data/charts/TavernMenuItems.json');
import LinkedChart from '../../src/LinkedChart'
import * as RandomChartSpec from '../RandomChartSpecHelper'
import { expect } from 'chai'

describe('TavernMenuItems', function() {
  it('should return same result', function() {
    const chart = new LinkedChart([{name:'TavernMenuItems', items:tavernMenuItems}]);
    RandomChartSpec.verifyGet(chart);
    RandomChartSpec.verifyMultipleGet(chart, 3);
    expect(chart.items.length).to.eql(50);
  });
});