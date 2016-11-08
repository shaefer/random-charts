import GemstonesGrade6 from '../../../data/charts/gemstones/GemstoneGrade6';
import LinkedChart from '../../../src/LinkedChart'
import * as RandomChartSpec from '../../RandomChartSpecHelper';
import getRandomGenerator from '../../../src/models/GetRandomGenerator';
import { expect } from 'chai';

describe('GemstonesGrade6', function() {
    it('should return gemstone item with rolled value', function() {
        const randomGeneratorForChart = getRandomGenerator("chartSeed");
        const chart = new LinkedChart([GemstonesGrade6], randomGeneratorForChart);
        const output = RandomChartSpec.verifyGet(chart);
        const randomGenerator = getRandomGenerator("seed");
        output.getResult().setRandomGenerator(randomGenerator);
        expect(output.getResult().toString()).to.be.eql("Emerald, brilliant green 6000gp");
        expect(output.results[0].chartName).to.be.eql(GemstonesGrade6.name);

        RandomChartSpec.verifyMultipleGet(chart, 3);
        expect(chart.items.length).to.eql(4);
    });
});