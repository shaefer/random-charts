import GemstonesGrade1 from '../../data/charts/GemstoneGrade1';
import RandomChart from '../../src/RandomChart'
import * as RandomChartSpec from '../RandomChartSpecHelper'
import { expect } from 'chai'

describe('TavernMenuItems', function() {
    it('should return same result', function() {
        const chart = new RandomChart('GemstonesGrade1', GemstonesGrade1, "chartSeed");
        const output = RandomChartSpec.verifyGet(chart);
        expect(output.getResult().toString("seed")).to.be.eql("Alabaster 12gp");

        RandomChartSpec.verifyMultipleGet(chart, 3);
        expect(chart.items.length).to.eql(4);
    });
});