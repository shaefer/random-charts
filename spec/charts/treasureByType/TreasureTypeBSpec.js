import TreasureTypeB from '../../../data/charts/treasureByType/TreasureTypeB';
import LinkedChart from '../../../src/LinkedChart';
import * as RandomChartSpec from '../../RandomChartSpecHelper';
import getRandomGenerator from '../../../src/models/GetRandomGenerator';
import { expect } from 'chai';

describe('TreasureTypeB', function() {
    it('should return multiple items with deeply rolled values', function() {
        const randomSeedThatReturnsIndexOf3ToForceTestOfLinkedItem = 2;
        const randomGenerator = getRandomGenerator(randomSeedThatReturnsIndexOf3ToForceTestOfLinkedItem);
        const chart = new LinkedChart(TreasureTypeB.name, TreasureTypeB.items, TreasureTypeB.subTables, randomGenerator);
        const item = RandomChartSpec.verifyGet(chart);
        console.log(item);

        expect(item.results.length).to.be.eql(4);
        expect(item.results[0].index).to.be.eql(1);
        expect(item.results[1].index).to.be.eql(1);
        expect(item.results[2].index).to.be.eql(1);
        expect(item.results[3].index).to.be.eql(8); //last item rolls on another table thus the index is for that table
        expect(item.results[3].parentIndex).to.be.eql(1); //last item rolls on another table thus the index is for that table
    });
});