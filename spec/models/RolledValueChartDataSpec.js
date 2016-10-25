import RolledValueChartData from '../../src/models/RolledValueChartData';
import { expect } from 'chai'

describe('RolledValueChartData', function() {
    describe('toString', function () {
        it('should properly eval dice notation', function() {
            const data = new RolledValueChartData("Ruby", "1d6+10", "gp", 2);
            expect(data.toString()).to.be.eql("Ruby (13 gp)");

            data.rerollResult()
            expect(data.toString()).to.be.eql("Ruby (14 gp)");

            data.rerollResult()
            expect(data.toString()).to.be.eql("Ruby (12 gp)");
        });

    });
});