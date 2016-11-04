import GemstonesGrade6 from '../../../data/charts/gemstones/GemstoneGrade6';
import RandomChart from '../../../src/RandomChart';
import * as RandomChartSpec from '../../RandomChartSpecHelper';
import getRandomGenerator from '../../../src/models/GetRandomGenerator';
import { expect } from 'chai';

describe('GemstonesGrade6', function() {
    it('should return gemstone item with rolled value', function() {
        const randomGeneratorForChart = getRandomGenerator("chartSeed");
        const chart = new RandomChart(GemstonesGrade6.name, GemstonesGrade6.items, randomGeneratorForChart);
        const output = RandomChartSpec.verifyGet(chart);
        const randomGenerator = getRandomGenerator("seed");
        output.getResult().setRandomGenerator(randomGenerator);
        expect(output.getResult().toString()).to.be.eql("Emerald, brilliant green 6000gp");
        expect(output.results[0].chartName).to.be.eql(GemstonesGrade6.name);

        RandomChartSpec.verifyMultipleGet(chart, 3);
        expect(chart.items.length).to.eql(4);
    });
});