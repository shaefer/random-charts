import GemstonesGrade1 from '../../../data/charts/gemstones/GemstoneGrade1';
import RandomChart from '../../../src/RandomChart'
import * as RandomChartSpec from '../../RandomChartSpecHelper'
import getRandomGenerator from '../../../src/models/GetRandomGenerator';
import { expect } from 'chai'

describe('GemstonesGrade1', function() {
    it('should return gemstone item with rolled value', function() {
        const randomGeneratorForChart = getRandomGenerator("chartSeed");
        const chart = new RandomChart([GemstonesGrade1], randomGeneratorForChart);
        const output = RandomChartSpec.verifyGet(chart);
        const randomGenerator = getRandomGenerator("seed");
        output.getResult().setRandomGenerator(randomGenerator);
        expect(output.getResult().toString()).to.be.eql("Lapis lazuli 12gp");
        expect(output.results[0].chartName).to.be.eql(GemstonesGrade1.name);

        RandomChartSpec.verifyMultipleGet(chart, 3);
        expect(chart.items.length).to.eql(14);
    });
});