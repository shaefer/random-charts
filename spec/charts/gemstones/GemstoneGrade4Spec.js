import GemstonesGrade4 from '../../../dist/data/charts/gemstones/GemstoneGrade4';
import RandomChart from '../../../dist/RandomChart'
import * as RandomChartSpec from '../../RandomChartSpecHelper'
import getRandomGenerator from '../../../dist/models/GetRandomGenerator';
import { expect } from 'chai'

describe('GemstonesGrade4', function() {
    it('should return gemstone item with rolled value', function() {
        const randomGeneratorForChart = getRandomGenerator("chartSeed");
        const chart = new RandomChart([GemstonesGrade4], randomGeneratorForChart);
        const output = RandomChartSpec.verifyGet(chart);
        const randomGenerator = getRandomGenerator("seed");
        output.getResult().setRandomGenerator(randomGenerator);
        expect(output.getResult().toString()).to.be.eql("Opal 600gp");
        expect(output.results[0].chartName).to.be.eql(GemstonesGrade4.name);

        RandomChartSpec.verifyMultipleGet(chart, 3);
        expect(chart.items.length).to.eql(4);
    });
});
