import ChartData from '../../src/models/ChartData';
import { expect } from 'chai';

describe('ChartData.toChartData', function() {
    it('should throw exception when name property not present', function () {
        const table = {items:["1"]};
        const toChartDataFn = () => {
            ChartData.toChartData(table);
        };
        expect(toChartDataFn).to.throw(Error);
    });
});