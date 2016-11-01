import GemstonesGrade6 from '../../../data/charts/gemstones/GemstoneGrade6';
import RandomChart from '../../../src/RandomChart'
import * as RandomChartSpec from '../../RandomChartSpecHelper'
import { expect } from 'chai'

describe('GemstonesGrade6', function() {
    it('should return gemstone item with rolled value', function() {
        const chart = new RandomChart('Greater Precious Gem (5,000gp; Craft DC 25)', GemstonesGrade6, "chartSeed");
        const output = RandomChartSpec.verifyGet(chart);
        expect(output.getResult().toString("seed")).to.be.eql("Emerald, brilliant green 6000gp");

        RandomChartSpec.verifyMultipleGet(chart, 3);
        expect(chart.items.length).to.eql(4);
    });
});