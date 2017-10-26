import {SimpleRandomChart, CreateRandomChartFromItems, CreateRandomChartId} from '../src/RandomChartCreators';
import * as RandomChartSpec from './RandomChartSpecHelper';
import getRandomGenerator from '../src/models/GetRandomGenerator';
import ChartData from '../src/models/ChartData';
import { expect } from 'chai';

describe('SimpleRandomChart', function() {
    describe('constructor with only name and items builds RandomChart', function () {
        it('should create a new class that can be instantiated and results returned', function() {
            const chart = SimpleRandomChart("mySimpleChart", ["One1", "Two2", "Three3"]);
            RandomChartSpec.verifyGet(chart);
            RandomChartSpec.verifyMultipleGet(chart, 3);
        });
    });
});

describe('CreateRandomChartFromItems', function() {
    it('should create a new class that can be instantiated and results returned', function() {
        const chart = CreateRandomChartFromItems(["One1", "Two2", "Three3"]);
        RandomChartSpec.verifyGet(chart);
        RandomChartSpec.verifyMultipleGet(chart, 3);
    });

    it('should generate fairly unique chart names', function() {
        var values = {}, i = 0, duplicateCount = 0, val;
        while (i < 10000) { 
            val = CreateRandomChartId();
            if (values[val]) { duplicateCount++;}
            values[val] = 1; i++; 
        } 
        expect(duplicateCount).to.be.lessThan(2);
    });
});