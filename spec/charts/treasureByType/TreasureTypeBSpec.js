import TreasureTypeB from '../../../dist/data/charts/treasureByType/TreasureTypeB';
import RandomChart from '../../../dist/RandomChart';
import * as RandomChartSpec from '../../RandomChartSpecHelper';
import getRandomGenerator from '../../../dist/models/GetRandomGenerator';
import { expect } from 'chai';

describe('TreasureTypeB', function() {
    // it('should be a list of all treasureTypeB chartData', function() {
    //     const randomSeedThatReturnsIndexOf3ToForceTestOfLinkedItem = 2;
    //     const randomGenerator = getRandomGenerator(randomSeedThatReturnsIndexOf3ToForceTestOfLinkedItem);

    //     const chart = new RandomChart(TreasureTypeB.tables, randomGenerator);
    //     const item = RandomChartSpec.verifyGet(chart);

    //     expect(item.results.length).to.be.eql(4);
    //     expect(item.results[0].index).to.be.eql(1);
    //     expect(item.results[1].index).to.be.eql(1);
    //     expect(item.results[2].index).to.be.eql(1);
    //     expect(item.results[3].index).to.be.eql(8); //last item rolls on another table thus the index is for that table
    //     expect(item.results[3].parentIndex).to.be.eql(1); //last item rolls on another table thus the index is for that table
    // });

    it('should be a list of all treasureTypeB chartData', function() {
        expect(Object.keys(TreasureTypeB).length).to.be.eql(17);
    });

    it('TreasureTypeB Should have a chart for 10gp', function() {
        expect(TreasureTypeB[10]).to.be.ok;
    });

    it('TreasureTypeB Should have a chart for 15gp', function() {
        expect(TreasureTypeB[15]).to.be.ok;
    });

    it('TreasureTypeB Should have a chart for 25gp', function() {
        expect(TreasureTypeB[25]).to.be.ok;
    });

    it('TreasureTypeB Should have a chart for 50gp', function() {
        expect(TreasureTypeB[50]).to.be.ok;
    });

    it('TreasureTypeB Should have a chart for 75gp', function() {
        expect(TreasureTypeB[75]).to.be.ok;
    });

    it('TreasureTypeB Should have a chart for 100gp', function() {
        expect(TreasureTypeB[100]).to.be.ok;
    });

    it('TreasureTypeB Should have a chart for 150gp', function() {
        expect(TreasureTypeB[150]).to.be.ok;
    });

    it('TreasureTypeB Should have a chart for 200gp', function() {
        expect(TreasureTypeB[200]).to.be.ok;
    });

    it('TreasureTypeB Should have a chart for 250gp', function() {
        expect(TreasureTypeB[250]).to.be.ok;
    });

    it('TreasureTypeB Should have a chart for 500gp', function() {
        expect(TreasureTypeB[500]).to.be.ok;
    });

    it('TreasureTypeB Should have a chart for 750gp', function() {
        expect(TreasureTypeB[750]).to.be.ok;
    });

    it('TreasureTypeB Should have a chart for 1000gp', function() {
        expect(TreasureTypeB[1000]).to.be.ok;
    });

    it('TreasureTypeB Should have a chart for 2500gp', function() {
        expect(TreasureTypeB[2500]).to.be.ok;
    });

    it('TreasureTypeB Should have a chart for 5000gp', function() {
        expect(TreasureTypeB[5000]).to.be.ok;
    });

    it('TreasureTypeB Should have a chart for 10000gp', function() {
        expect(TreasureTypeB[10000]).to.be.ok;
    });

    it('TreasureTypeB Should have a chart for 20000gp', function() {
        expect(TreasureTypeB[20000]).to.be.ok;
    });

    it('TreasureTypeB Should have a chart for 50000gp', function() {
        expect(TreasureTypeB[50000]).to.be.ok;
    });
});
