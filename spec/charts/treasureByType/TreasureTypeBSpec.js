import TreasureTypeB from '../../../dist/data/charts/treasureByType/TreasureTypeB';
import RandomChart from '../../../dist/RandomChart';
import * as RandomChartSpec from '../../RandomChartSpecHelper';
import getRandomGenerator from '../../../dist/models/GetRandomGenerator';
import { expect } from 'chai';

describe('TreasureTypeB', function() {
    it('should return multiple items with deeply rolled values', function() {
        const randomSeedThatReturnsIndexOf3ToForceTestOfLinkedItem = 2;
        const randomGenerator = getRandomGenerator(randomSeedThatReturnsIndexOf3ToForceTestOfLinkedItem);

        const chart = new RandomChart(TreasureTypeB.tables, randomGenerator);
        const item = RandomChartSpec.verifyGet(chart);

        expect(item.results.length).to.be.eql(4);
        expect(item.results[0].index).to.be.eql(1);
        expect(item.results[1].index).to.be.eql(1);
        expect(item.results[2].index).to.be.eql(1);
        expect(item.results[3].index).to.be.eql(8); //last item rolls on another table thus the index is for that table
        expect(item.results[3].parentIndex).to.be.eql(1); //last item rolls on another table thus the index is for that table
    });
});
