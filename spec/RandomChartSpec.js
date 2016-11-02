import RandomChart from '../src/RandomChart'
import * as RandomChartSpec from './RandomChartSpecHelper'
import getRandomGenerator from '../src/models/GetRandomGenerator'
import { expect } from 'chai'

describe('RandomChart', function() {
  describe('create', function () {
    it('should create a new class that can be instantiated and results returned', function() {
      const chart = new RandomChart("myChart", ["One1", "Two2", "Three3"]);
      RandomChartSpec.verifyGet(chart);
      RandomChartSpec.verifyMultipleGet(chart, 3);
    });
  });
});

describe('ChartsWithRandomSeed', function() {
   describe('get()', function() {
    it('charts with same seed should return same result', function() {
       const seed = "Fixed";
       const randomGenerator = getRandomGenerator(seed);
       const randomGeneratorWithSameSeed = getRandomGenerator(seed);
       const items = ["One1", "Two2", "Three3"];
       const chart1 = new RandomChart("chart1", items, randomGenerator);
       const chart2 = new RandomChart("chart2", items, randomGeneratorWithSameSeed);
      expect(chart1.get().results).to.eql(chart2.get().results);
    });
  });
  describe('get(3)', function() {
    it('should return 3 results', function() {
       const seed = "Fixed";
       const randomGenerator = getRandomGenerator(seed);
       const items = ["One1", "Two2", "Three3"];

        let chart1Name = "chart1";
        let chart2Name = "chart2";
        const chart1 = new RandomChart(chart1Name, items, randomGenerator);
        const chart2 = new RandomChart(chart2Name, items, randomGenerator);
        let chart1Output = chart1.get(3);
        let chart2Output = chart2.get(3);
        const chart1Results = chart1Output.results;
        const chart2Results = chart2Output.results;

       expect(chart1Results.length).to.eql(3);
       expect(chart2Results.length).to.eql(3);
    });
  });
});