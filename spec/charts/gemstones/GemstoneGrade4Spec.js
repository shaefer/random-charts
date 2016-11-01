import GemstonesGrade4 from '../../../data/charts/gemstones/GemstoneGrade4';
import RandomChart from '../../../src/RandomChart'
import * as RandomChartSpec from '../../RandomChartSpecHelper'
import { expect } from 'chai'

describe('GemstonesGrade4', function() {
    it('should return gemstone item with rolled value', function() {
        const chart = new RandomChart('Greater Semi-Precious Gem (Craft DC 20)', GemstonesGrade4, "chartSeed");
        const output = RandomChartSpec.verifyGet(chart);
        expect(output.getResult().toString("seed")).to.be.eql("Opal 600gp");

        RandomChartSpec.verifyMultipleGet(chart, 3);
        expect(chart.items.length).to.eql(4);
    });
});