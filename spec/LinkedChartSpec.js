import LinkedChart from '../src/LinkedChart';
import * as RandomChartSpec from './RandomChartSpecHelper';
import getRandomGenerator from '../src/models/GetRandomGenerator';
import { expect } from 'chai';

//TODO: Handle multiple items where one item is roll on another chart and the rest are raw results. http://paizo.com/pathfinderRPG/prd/ultimateEquipment/appendix.html#type-b-treasure-coins-and-gems-table
describe('LinkedChart', function() {
  describe('rolling on LinkedChart', function () {
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

      const randomSeedThatReturnsIndexOf3ToForceTestOfLinkedItem = 3;
      const randomGenerator = getRandomGenerator(randomSeedThatReturnsIndexOf3ToForceTestOfLinkedItem);
      const chart = new LinkedChart(mainTable.name, mainTable.items, [subTable], randomGenerator);
      const item = RandomChartSpec.verifyGet(chart);
      const result = item.results[0];
      expect(result.index).to.be.eql(3);
    });
  });

  describe('rolling on LinkedChart pointing at itself', function () {
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

          const randomSeedThatReturnsIndexOf3ToForceTestOfLinkedItem = 3;
          const randomGenerator = getRandomGenerator(randomSeedThatReturnsIndexOf3ToForceTestOfLinkedItem);
          const chart = new LinkedChart(mainTable.name, mainTable.items, [], randomGenerator);
          const item = RandomChartSpec.verifyGet(chart);
          const result = item.results[0];
          expect(result.index).to.be.eql(3);
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

          const randomSeedThatReturnsIndexOf3ToForceTestOfLinkedItem = 3;
          const randomGenerator = getRandomGenerator(randomSeedThatReturnsIndexOf3ToForceTestOfLinkedItem);
          const chart = new LinkedChart(mainTable.name, mainTable.items, [], randomGenerator);
          const item = RandomChartSpec.verifyGet(chart);
          const result = item.results[0];
          expect(result.index).to.be.eql(3);
          expect(item.results.length).to.be.eql(7);
      });
  });
});