import Owlbear from 'owlbear';
import {rollDice} from '../selectionMethodologies/DiceRollItemSelection';
import seedrandom from 'seedrandom';
export default class RolledValueChartData {
    constructor(name, value, label, randomSeed) {
        this.name = name;
        this.value = value;
        this.label = label;
        if (randomSeed) {
            this.random = seedrandom(randomSeed);
            this.randomSeed = randomSeed;
        } else {
            this.random = seedrandom();
        }

        this.parsedOwlbearResult = new Owlbear().parse(value);
        this.valueResult = this.evalOwlbearResult(this.parsedOwlbearResult);
    }

    rerollResult() {
        this.valueResult = this.evalOwlbearResult(this.parsedOwlbearResult);
    }

    toString() {
        return `${this.name} (${this.valueResult} ${this.label})`;
    }

    evalOwlbearResult(originalResult) {
        let result = originalResult.slice();
        while(result.length > 2) {
            if (result.length == 2)
                throw "Owlbear should not have only 2 items";
            let itemsToEval = result.splice(0, 3);
            itemsToEval = itemsToEval.map((i) => {
                return this.resolveToNumOrOperator(i);
            });
            result.unshift(this.math(itemsToEval[0], itemsToEval[1], itemsToEval[2]));
        }
        return result[0];
    }

    resolveToNumOrOperator(item) {
        if (item.die) {
            return rollDice(item.count, item.die.sides, this.random).total;
        }
        if (item.constant) {
            return item.constant;
        }
        if (item.operator) {
            return item.operator;
        }
    }

    math(a, operator, b) {
        if (operator == '+') {
            return a + b;
        }
        if (operator == '-') {
            return a - b;
        }
        if (operator == '*') {
            return a * b;
        }
    }
}

