var LinkedChart = require('../src/LinkedChart'),
    RandomChartSpec = require('./RandomChartSpecHelper');
var expect = require('chai').expect;

describe('LinkedChart', function() {
  describe('create', function () {
    it('should create a new class that can be instantiated and results returned', function() {

      const subTable = {
          linked: false,
          name: "A SubTable",
          items: ["Chart2-A", "Chart2-B", "Chart2-C"]
      };
      const mainTable = {
        name: "Some Linked Chart",
        items: ["Chart1-1", "Chart1-2", "Chart1-3", {linkedTable:subTable.name, description:"Roll on Subtable: " + subTable.name}]
      };



      var chart = new LinkedChart(mainTable.name, mainTable.items, [subTable], 3);
      var result = RandomChartSpec.verifyGet(chart);
        expect(result.index).to.be.eql(3);
      console.log(result);
    });
  });
});