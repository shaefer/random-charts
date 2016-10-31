import RolledValueChartData from '../../src/models/RolledValueChartData';
import { expect } from 'chai'

describe('RollDiceNotation', function() {
    it('should properly eval dice notation with seed', function() {
        const data = new RolledValueChartData("Ruby", "1d6+10", "gp");
        const result = data.rollDiceNotation(data.value, 2);
        expect(result).to.be.eql(13);
    });
});