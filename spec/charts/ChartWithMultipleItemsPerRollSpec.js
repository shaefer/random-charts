import ChartData from '../../data/charts/ChartWithMultipleItemsPerRoll';
import RandomChart from '../../src/RandomChart';
import * as RandomChartSpec from '../RandomChartSpecHelper';
import getRandomGenerator from '../../src/models/GetRandomGenerator';
import { expect } from 'chai';

describe('ChartWithMultipleItemsPerRoll', function() {
    it('should return gemstone item with rolled value', function() {
        const chart = new RandomChart('Chart with entries containing 3 items', ChartData, "chartSeed");
        const output = RandomChartSpec.verifyGet(chart);
        const randomGenerator = getRandomGenerator("seed");
        output.getResult().forEach((i) => {
            i.setRandomGenerator(randomGenerator);
        });
        expect(output.getResult()[0].rollValue().toString()).to.be.eql("Agate 12gp");
        expect(output.getResult()[1].rollValue().toString()).to.be.eql("Alabaster 9gp");
        expect(output.getResult()[2].rollValue().toString()).to.be.eql("Azurite 10gp");

        expect(chart.items.length).to.eql(2);
    });
});