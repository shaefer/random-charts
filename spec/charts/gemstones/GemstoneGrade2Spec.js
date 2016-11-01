import GemstonesGrade2 from '../../../data/charts/gemstones/GemstoneGrade2';
import RandomChart from '../../../src/RandomChart'
import * as RandomChartSpec from '../../RandomChartSpecHelper'
import { expect } from 'chai'

describe('GemstonesGrade2', function() {
    it('should return gemstone item with rolled value', function() {
        const chart = new RandomChart('Lesser Semi-Precious Gem (Craft DC 12)', GemstonesGrade2, "chartSeed");
        const output = RandomChartSpec.verifyGet(chart);
        expect(output.getResult().toString("seed")).to.be.eql("Ivory 60gp");

        RandomChartSpec.verifyMultipleGet(chart, 3);
        expect(chart.items.length).to.eql(14);
    });
});