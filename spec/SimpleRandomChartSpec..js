import {SimpleRandomChart, CreateChartForItems} from '../src/SimpleRandomChart';
import * as RandomChartSpec from './RandomChartSpecHelper';
import getRandomGenerator from '../src/models/GetRandomGenerator';
import ChartData from '../src/models/ChartData';
import { expect } from 'chai';

describe('SimpleRandomChart', function() {
    describe('create', function () {
        it('should create a new class that can be instantiated and results returned', function() {
            const chart = SimpleRandomChart("mySimpleChart", ["One1", "Two2", "Three3"]);
            RandomChartSpec.verifyGet(chart);
            RandomChartSpec.verifyMultipleGet(chart, 3);
        });
    });
});

describe('CreateChartForItems', function() {
    describe('create', function () {
        it('should create a new class that can be instantiated and results returned', function() {
            const chart = CreateChartForItems(["One1", "Two2", "Three3"]);
            RandomChartSpec.verifyGet(chart);
            RandomChartSpec.verifyMultipleGet(chart, 3);
        });
    });
});