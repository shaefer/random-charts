const tavernMenuItems = require('../../data/charts/TavernMenuItems.json');
import RandomChart from '../../src/RandomChart'
import * as RandomChartSpec from '../RandomChartSpecHelper'
import { expect } from 'chai'
import { describe, it} from "mocha";

describe('TavernMenuItems', function() {
  it('should return same result', function() {
    const chart = new RandomChart('TavernMenuItems', tavernMenuItems);
    RandomChartSpec.verifyGet(chart);
    RandomChartSpec.verifyMultipleGet(chart, 3);
    expect(chart.items.length).to.eql(50);
  });
});