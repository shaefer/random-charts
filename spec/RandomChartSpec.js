import RandomChart from '../src/RandomChart'
import * as RandomChartSpec from './RandomChartSpecHelper'
import { expect } from 'chai'
import {describe, it} from "mocha";

describe('RandomChart', function() {
  describe('create', function () {
    it('should create a new class that can be instantiated and results returned', function() {
      const chart = new RandomChart("myChart", ["One1", "Two2", "Three3"]);
      RandomChartSpec.verifyGet(chart);
      RandomChartSpec.verifyMultipleGet(chart, 3);
      expect(chart.randomSeed).to.be.an('undefined');
    });
  });
});

describe('ChartsWithRandomSeed', function() {
   describe('get()', function() {
    it('charts with same seed should return same result', function() {
       const seed = "Fixed";
       const items = ["One1", "Two2", "Three3"];
       const chart1 = new RandomChart("chart1", items, seed);
       const chart2 = new RandomChart("chart2", items, seed);
      expect(chart1.get()).to.eql(chart2.get());
    });
  });
  describe('get(3)', function() {
    it('should return 3 results', function() {
       const seed = "Fixed";
       const items = ["One1", "Two2", "Three3"];
       const chart1 = new RandomChart("chart1", items, seed);
       const chart2 = new RandomChart("chart2", items, seed);
       const chart1Results = chart1.get(3);
       const chart2Results = chart2.get(3);
       expect(chart1Results).to.eql(chart2Results);
    });
  });
  describe('getRandomSeed()', function() {
    it('should return given seed', function() {
       const seed = "Fixed";
       const items = ["One1", "Two2", "Three3"];
       const chart1 = new RandomChart("chart1", items, seed);
       const chart2 = new RandomChart("chart2", items, seed);
      expect(chart1.randomSeed).to.eql(seed);
      expect(chart2.randomSeed).to.eql(seed);
    });
  });
});