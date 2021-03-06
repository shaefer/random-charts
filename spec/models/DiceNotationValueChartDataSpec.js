import DiceNotationValueChartData from '../../src/models/DiceNotationValueChartData';
import getRandomGenerator from '../../src/models/GetRandomGenerator';
import { expect } from 'chai'

describe('DiceNotationValueChartData', function() {
    it('should properly eval dice notation with seed', function() {
        const data = new DiceNotationValueChartData("Ruby", "1d6+10", "gp");
        const randomGenerator = getRandomGenerator(2);
        data.setRandomGenerator(randomGenerator);
        const result = data.getRolledValue();
        expect(result).to.be.eql(13);
    });

    it('should properly eval dice notation without seed', function() {
        const data = new DiceNotationValueChartData("Ruby", "1d2", "gp");
        const result = data.getRolledValue();
        expect(result).to.be.at.least(1);
        expect(result).to.be.at.most(2);
    });

    it('should roll with just dice', function() {
        const data = new DiceNotationValueChartData("Ruby", "1d2", "gp");
        const randomGenerator = getRandomGenerator("someRandomSeed");
        data.setRandomGenerator(randomGenerator);
        const result = data.getRolledValue();
        expect(result).to.be.eql(2);
    });

    it('should return value of constant', function() {
        const data = new DiceNotationValueChartData("Ruby", "1", "gp");
        const result = data.getRolledValue();
        expect(result).to.be.eql(1);
    });

    it('should roll multiple dice', function() {
        const data = new DiceNotationValueChartData("Ruby", "2d2", "gp");
        const randomGenerator = getRandomGenerator("someRandomSeed");
        data.setRandomGenerator(randomGenerator);
        const result = data.getRolledValue();
        expect(result).to.be.eql(3);
    });

    it('should roll multiple dice with addition', function() {
        const data = new DiceNotationValueChartData("Ruby", "2d2+2", "gp");
        const randomGenerator = getRandomGenerator("someRandomSeed");
        data.setRandomGenerator(randomGenerator);
        const result = data.getRolledValue();
        expect(result).to.be.eql(5);
    });

    it('should roll multiple dice with subtraction', function() {
        const data = new DiceNotationValueChartData("Ruby", "2d2-2", "gp");
        const randomGenerator = getRandomGenerator("anotherRandomSeed12341234");
        data.setRandomGenerator(randomGenerator);
        const result = data.getRolledValue();
        expect(result).to.be.eql(2);
    });

    it('should roll multiple dice with multiplication', function() {
        const data = new DiceNotationValueChartData("Ruby", "2d6*2", "gp");
        const randomGenerator = getRandomGenerator("anotherRandomSeed12341234");
        data.setRandomGenerator(randomGenerator);
        const result = data.getRolledValue();
        expect(result).to.be.eql(20);
    });

    it('should roll multiple dice with multiplication and addition', function() {
        const data = new DiceNotationValueChartData("Ruby", "2d6*2+5", "gp");
        const randomGenerator = getRandomGenerator("anotherRandomSeed12341234");
        data.setRandomGenerator(randomGenerator);
        const result = data.getRolledValue();
        expect(result).to.be.eql(25);
    });

    it('should handle multiplication and addition with different order', function() {
        const data = new DiceNotationValueChartData("Ruby", "2d6*5+2", "gp");
        const randomGenerator = getRandomGenerator("anotherRandomSeed12341234");
        data.setRandomGenerator(randomGenerator);
        const result = data.getRolledValue();
        expect(result).to.be.eql(52);
    });

    it('should handle multiplication, addition, and operators left to right', function() {
        const data = new DiceNotationValueChartData("Ruby", "2d6+5*2", "gp");
        const randomGenerator = getRandomGenerator("anotherRandomSeed12341234");
        data.setRandomGenerator(randomGenerator);
        const result = data.getRolledValue();
        expect(result).to.be.eql(30);
    });

    it('should roll multiple dice with operator between more dice', function() {
        const data = new DiceNotationValueChartData("Ruby", "2d6*2d4", "gp");
        const randomGenerator = getRandomGenerator("anotherRandomSeed12341234");
        data.setRandomGenerator(randomGenerator);
        const result = data.getRolledValue();
        expect(result).to.be.eql(80);
    });

    it('should roll multiple dice with division operator', function() {
        const data = new DiceNotationValueChartData("Ruby", "2d6/5", "gp");
        const randomGenerator = getRandomGenerator("anotherRandomSeed12341234");
        data.setRandomGenerator(randomGenerator);
        const result = data.getRolledValue();
        expect(result).to.be.eql(2);
    });

    it('should roll multiple dice with multiple operators left to right', function() {
        const data = new DiceNotationValueChartData("Ruby", "2d6 + 3 + 2d4 + 2 - 1 * 2", "gp");
        const randomGenerator = getRandomGenerator("anotherRandomSeed12341234");
        data.setRandomGenerator(randomGenerator);
        const result = data.getRolledValue();
        expect(result).to.be.eql(44);
    });

    it('should toString name, rolled value, and label', function() {
        const data = new DiceNotationValueChartData("Ruby", "2d6 + 3 + 2d4 + 2 - 1 * 2", "gp");
        const randomGenerator = getRandomGenerator("anotherRandomSeed12341234");
        data.setRandomGenerator(randomGenerator);
        const result = data.toString();
        expect(result).to.be.eql("Ruby 44gp");
    });

    it('should toString does not automatically reroll', function() {
        const data = new DiceNotationValueChartData("Ruby", "2d6 + 3 + 2d4 + 2 - 1 * 2", "gp");
        const randomGenerator = getRandomGenerator("anotherRandomSeed12341234");
        data.setRandomGenerator(randomGenerator);
        const result = data.toString();
        const result2 = data.toString();
        expect(result).to.be.eql("Ruby 44gp");
        expect(result2).to.be.eql(result);
    });

    it('should rollValue allows chaining', function() {
        const data = new DiceNotationValueChartData("Ruby", "2d6 + 3 + 2d4 + 2 - 1 * 2", "gp");
        const randomGenerator = getRandomGenerator("anotherRandomSeed12341234");
        data.setRandomGenerator(randomGenerator);
        const result = data.rollValue().toString();
        expect(result).to.be.eql("Ruby 44gp");
    });

    it('should reroll each time rollValue is called', function() {
        const data = new DiceNotationValueChartData("Ruby", "2d6 + 3 + 2d4 + 2 - 1 * 2", "gp");
        const randomGenerator = getRandomGenerator("anotherRandomSeed12341234");
        data.setRandomGenerator(randomGenerator);
        const result = data.rollValue().toString();
        const result2 = data.rollValue().toString();
        expect(result).to.be.eql("Ruby 44gp");
        expect(result2).to.be.eql("Ruby 20gp");
    });

    it('should return last rolledValue from getRolledValue if already rolled', function() {
        const data = new DiceNotationValueChartData("Ruby", "2d6 + 3 + 2d4 + 2 - 1 * 2", "gp");
        const randomGenerator = getRandomGenerator("anotherRandomSeed12341234");
        data.setRandomGenerator(randomGenerator);
        const result = data.rollValue().toString();
        expect(result).to.be.eql("Ruby 44gp");
        expect(data.getRolledValue()).to.be.eql(44);
    });
});