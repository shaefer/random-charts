import GemstonesGrade5 from '../../../data/charts/gemstones/GemstoneGrade5';
import RandomChart from '../../../src/RandomChart'
import * as RandomChartSpec from '../../RandomChartSpecHelper'
import getRandomGenerator from '../../../src/models/GetRandomGenerator';
import { expect } from 'chai'

describe('GemstonesGrade5', function() {
    it('should return gemstone item with rolled value', function() {
        const randomGeneratorForChart = getRandomGenerator("chartSeed");
        const chart = new RandomChart(GemstonesGrade5.name, GemstonesGrade5.items, randomGeneratorForChart);
        const output = RandomChartSpec.verifyGet(chart);
        const randomGenerator = getRandomGenerator("seed");
        output.getResult().setRandomGenerator(randomGenerator);
        expect(output.getResult().toString()).to.be.eql("Emerald 1200gp");
        expect(output.results[0].chartName).to.be.eql(GemstonesGrade5.name);

        RandomChartSpec.verifyMultipleGet(chart, 3);
        expect(chart.items.length).to.eql(4);
    });
});