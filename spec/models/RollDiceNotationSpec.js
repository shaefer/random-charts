import RolledValueChartData from '../../src/models/RolledValueChartData';
import RollDiceNotation from '../../src/models/RollDiceNotation'
import { expect } from 'chai'

describe('RollDiceNotation', function() {
    it('should properly eval dice notation with seed', function() {
        const data = new RolledValueChartData("Ruby", "1d6+10", "gp");
        const result = RollDiceNotation(data.value, 2);
        expect(result).to.be.eql(13);
    });
});