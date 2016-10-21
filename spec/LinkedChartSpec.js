import LinkedChart from '../src/LinkedChart';
import * as RandomChartSpec from './RandomChartSpecHelper';
import { expect } from 'chai';
import {describe, it} from "mocha";

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
      const chart = new LinkedChart(mainTable.name, mainTable.items, [subTable], randomSeedThatReturnsIndexOf3ToForceTestOfLinkedItem);
      const result = RandomChartSpec.verifyGet(chart);
        expect(result.index).to.be.eql(3);
    });
  });

  describe('rolling on LinkedChart pointing at itself', function () {
      it('should roll deeply when selecting an item referencing itself', function () {
          const tableName = "Some Linked Chart"
          const mainTable = {
              linked: true,
              name: tableName,
              items: ["Chart1-1", "Chart1-2", "Chart1-3", {
                  linkedTable: tableName,
                  description: "Roll again on this table"
              }]
          };

          const randomSeedThatReturnsIndexOf3ToForceTestOfLinkedItem = 3;
          const chart = new LinkedChart(mainTable.name, mainTable.items, [], randomSeedThatReturnsIndexOf3ToForceTestOfLinkedItem);
          const result = RandomChartSpec.verifyGet(chart);
          expect(result.index).to.be.eql(3);
          expect(result.subResults.results[0].index).to.be.eql(2);
      });

      it('should roll multiple times when selecting an item referencing itself with a `times` field', function () {
          const tableName = "Some Linked Chart"
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
          const chart = new LinkedChart(mainTable.name, mainTable.items, [], randomSeedThatReturnsIndexOf3ToForceTestOfLinkedItem);
          const result = RandomChartSpec.verifyGet(chart);
          expect(result.index).to.be.eql(3);
          expect(result.subResults.results.length).to.be.eql(2);
          expect(result.subResults.results[0].index).to.be.eql(2);
          expect(result.subResults.results[1].index).to.be.eql(3);
          console.log(result);
      });
  });
});