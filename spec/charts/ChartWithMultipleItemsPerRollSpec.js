import ChartData from '../../data/charts/ChartWithMultipleItemsPerRoll';
import RandomChart from '../../src/RandomChart'
import * as RandomChartSpec from '../RandomChartSpecHelper'
import { expect } from 'chai'

describe('ChartWithMultipleItemsPerRoll', function() {
    it('should return gemstone item with rolled value', function() {
        const chart = new RandomChart('Chart with entries containing 3 items', ChartData, "chartSeed");
        const output = RandomChartSpec.verifyGet(chart);
        //TODO: Refactor to pass in randomGenerator rather than just the seed since this is a raw function.
        expect(output.getResult()[0].toString("seed")).to.be.eql("Agate 12gp");
        expect(output.getResult()[1].toString("seed")).to.be.eql("Alabaster 12gp");
        expect(output.getResult()[2].toString("seed")).to.be.eql("Azurite 12gp");

        expect(chart.items.length).to.eql(2);
    });
});