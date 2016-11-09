import RandomChart from '../src/RandomChart';
import * as RandomChartSpec from './RandomChartSpecHelper';
import getRandomGenerator from '../src/models/GetRandomGenerator';
import ChartData from '../src/models/ChartData';
import { expect } from 'chai';

describe('LinkedChart', function() {
  describe('rolling on RandomChart', function () {
    it('should roll deeply when selecting an item referencing a linkedTable', function() {
      const subTable = {
          linked: false,
          name: "A SubTable",
          items: ["Chart2-A", "Chart2-B", "Chart2-C"]
      };
      const mainTable = {
          linked: true,
          name: "Some Linked Chart",
          items: ["Chart1-1", "Chart1-2", "Chart1-3", {linkedTable:subTable.name, description:"Roll on Subtable: " + subTable.name}]
      };

      const tables = [mainTable, subTable];

      const randomSeedThatReturnsIndexOf3ToForceTestOfLinkedItem = 3;
      const randomGenerator = getRandomGenerator(randomSeedThatReturnsIndexOf3ToForceTestOfLinkedItem);
      const chart = new RandomChart(tables, randomGenerator);
      const item = RandomChartSpec.verifyGet(chart);
      const result = item.results[0];
      expect(result.index).to.be.eql(1);
    });
  });

  describe('rolling on RandomChart pointing at itself', function () {
      it('should roll deeply when selecting an item referencing itself', function () {
          const tableName = "Some Linked Chart";
          const mainTable = {
              linked: true,
              name: tableName,
              items: ["Chart1-1", "Chart1-2", "Chart1-3", {
                  linkedTable: tableName,
                  description: "Roll again on this table"
              }]
          };

          const tables = [mainTable];

          const randomSeedThatReturnsIndexOf3ToForceTestOfLinkedItem = 3;
          const randomGenerator = getRandomGenerator(randomSeedThatReturnsIndexOf3ToForceTestOfLinkedItem);
          const chart = new RandomChart(tables, randomGenerator);
          const item = RandomChartSpec.verifyGet(chart);
          const result = item.results[0];
          expect(result.index).to.be.eql(2);
      });

      it('should roll multiple times when selecting an item referencing itself with a `times` field', function () {
          const tableName = "Some Linked Chart";
          const mainTable = {
              linked: true,
              name: tableName,
              items: ["Chart1-1", "Chart1-2", "Chart1-3", {
                  linkedTable: tableName,
                  description: "Roll again on this table",
                  times: 2
              }]
          };

          const tables = [mainTable];

          const randomSeedThatReturnsIndexOf3ToForceTestOfLinkedItem = 3;
          const randomGenerator = getRandomGenerator(randomSeedThatReturnsIndexOf3ToForceTestOfLinkedItem);
          const chart = new RandomChart(tables, randomGenerator);
          const item = RandomChartSpec.verifyGet(chart);
          const result = item.results[0];
          expect(result.index).to.be.eql(2);
          expect(item.results.length).to.be.eql(4);
      });
  });
});

describe('RandomChart', function() {
    describe('create', function () {
        it('should create a new class that can be instantiated and results returned', function() {
            const table = new ChartData("myChart", ["One1", "Two2", "Three3"]);
            const chart = new RandomChart(table);
            RandomChartSpec.verifyGet(chart);
            RandomChartSpec.verifyMultipleGet(chart, 3);
        });
    });
    describe('createWithBadData', function () {
        it('should throw exception when trying to make data without name and items into ChartData', function() {
            const table = {items:["1", "2", "3", "4"]};
            const createRandomChartFn = () => {
                new RandomChart(table)
            };
            expect(createRandomChartFn).to.throw(Error);
        });

        it('should not throw exception when data has name and items', function() {
            const table = {name:"someTable", items:["1", "2", "3", "4"]};
            const createRandomChartFn = () => {
                new RandomChart(table)
            };
            expect(createRandomChartFn).to.not.throw(Error);
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
            let chartName1 = "chart1";
            let chartName2 = "chart2";
            const chart1Data = {name:chartName1, items: items};
            const chart2Data = {name:chartName2, items: items};
            const chart1 = new RandomChart([chart1Data], randomGenerator);
            const chart2 = new RandomChart([chart2Data], randomGeneratorWithSameSeed);
            const chart1Output = chart1.get();
            const chart2Output = chart2.get();
            expect(chart1Output.getResult()).to.eql(chart2Output.getResult());
            expect(chart1Output.results[0].index).to.eql(chart2Output.results[0].index);
            expect(chart1Output.results[0].index).to.eql(chart2Output.results[0].index);
            expect(chart1Output.results[0].chartName).to.eql(chartName1);
            expect(chart2Output.results[0].chartName).to.eql(chartName2);
        });
    });
    describe('get(3)', function() {
        it('should return 3 results', function() {
            const seed = "Fixed";
            const randomGenerator = getRandomGenerator(seed);
            const items = ["One1", "Two2", "Three3"];

            let chart1Name = "chart1";
            const chart1Data = {name:chart1Name, items: items};
            const chart1 = new RandomChart([chart1Data], randomGenerator);
            let chart1Output = chart1.get(3);
            const chart1Results = chart1Output.results;

            expect(chart1Results.length).to.eql(3);
        });
    });
});