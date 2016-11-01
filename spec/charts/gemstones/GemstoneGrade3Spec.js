import GemstonesGrade3 from '../../../data/charts/gemstones/GemstoneGrade3';
import RandomChart from '../../../src/RandomChart'
import * as RandomChartSpec from '../../RandomChartSpecHelper'
import { expect } from 'chai'

describe('GemstonesGrade3', function() {
    it('should return gemstone item with rolled value', function() {
        const chart = new RandomChart('Semi-Precious Gem (Craft DC 15)', GemstonesGrade3, "chartSeed");
        const output = RandomChartSpec.verifyGet(chart);
        expect(output.getResult().toString("seed")).to.be.eql("Coral 120gp");

        RandomChartSpec.verifyMultipleGet(chart, 3);
        expect(chart.items.length).to.eql(10);
    });
});