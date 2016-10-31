import RolledValueChartData from '../../src/models/RolledValueChartData';
import { expect } from 'chai'

describe('RollDiceNotation', function() {
    it('should properly eval dice notation with seed', function() {
        const data = new RolledValueChartData("Ruby", "1d6+10", "gp");
        const result = data.getValue(2);
        expect(result).to.be.eql(13);
    });

    it('should properly eval dice notation without seed', function() {
        const data = new RolledValueChartData("Ruby", "1d2", "gp");
        const result = data.getValue();
        expect(result).to.be.at.least(1);
        expect(result).to.be.at.most(2);
    });

    it('should roll with just dice', function() {
        const data = new RolledValueChartData("Ruby", "1d2", "gp");
        const result = data.getValue("someRandomSeed");
        expect(result).to.be.eql(2);
    });

    it('should return value of constant', function() {
        const data = new RolledValueChartData("Ruby", "1", "gp");
        const result = data.getValue();
        expect(result).to.be.eql(1);
    });

    it('should roll multiple dice', function() {
        const data = new RolledValueChartData("Ruby", "2d2", "gp");
        const result = data.getValue("someRandomSeed");
        expect(result).to.be.eql(3);
    });

    it('should roll multiple dice with addition', function() {
        const data = new RolledValueChartData("Ruby", "2d2+2", "gp");
        const result = data.getValue("someRandomSeed");
        expect(result).to.be.eql(5);
    });

    it('should roll multiple dice with subtraction', function() {
        const data = new RolledValueChartData("Ruby", "2d2-2", "gp");
        const result = data.getValue("anotherRandomSeed12341234");
        expect(result).to.be.eql(2);
    });

    it('should roll multiple dice with multiplication', function() {
        const data = new RolledValueChartData("Ruby", "2d6*2", "gp");
        const result = data.getValue("anotherRandomSeed12341234");
        expect(result).to.be.eql(20);
    });

    it('should roll multiple dice with multiplication and addition', function() {
        const data = new RolledValueChartData("Ruby", "2d6*2+5", "gp");
        const result = data.getValue("anotherRandomSeed12341234");
        expect(result).to.be.eql(25);
    });

    it('should roll multiple dice with multiplication and addition with different order', function() {
        const data = new RolledValueChartData("Ruby", "2d6*5+2", "gp");
        const result = data.getValue("anotherRandomSeed12341234");
        expect(result).to.be.eql(52);
    });

    it('should roll multiple dice with operator between more dice', function() {
        const data = new RolledValueChartData("Ruby", "2d6*2d4", "gp");
        const result = data.getValue("anotherRandomSeed12341234");
        expect(result).to.be.eql(80);
    });

    it('should roll multiple dice with division operator', function() {
        const data = new RolledValueChartData("Ruby", "2d6/5", "gp");
        const result = data.getValue("anotherRandomSeed12341234");
        expect(result).to.be.eql(2);
    });

    it('should roll multiple dice with multiple operators left to right', function() {
        const data = new RolledValueChartData("Ruby", "2d6 + 3 + 2d4 + 2 - 1 * 2", "gp");
        const result = data.getValue("anotherRandomSeed12341234");
        expect(result).to.be.eql(44);
    });
});