import Owlbear from 'owlbear';
import {rollDice} from '../selectionMethodologies/DiceRollItemSelection';
import getRandomGenerator from './GetRandomGenerator';

const math = (a, operator, b) => {
    if (operator == '+') {
        return a + b;
    }
    if (operator == '-') {
        return a - b;
    }
    if (operator == '*') {
        return a * b;
    }
    if (operator == '/') {
        return a / b;
    }
};

const resolveToNumOrOperator = (item, random) => {
    if (item.die) {
        return rollDice(item.count, item.die.sides, random).total;
    }
    if (item.constant) {
        return item.constant;
    }
    if (item.operator) {
        return item.operator;
    }
    return item;
};

const mapResolver = (random, i) => {
    return resolveToNumOrOperator(i, random);
};

const evalOwlbearResult = (originalResult, random) => {
    let result = originalResult.slice();
    if (result.length == 1) {
        return resolveToNumOrOperator(result[0], random);
    }
    while(result.length > 2) {
        if (result.length == 2)
            throw "Owlbear should not have only 2 items";
        let itemsToEval = result.splice(0, 3);
        itemsToEval = itemsToEval.map(mapResolver.bind(null, random));
        result.unshift(math(itemsToEval[0], itemsToEval[1], itemsToEval[2]));
    }
    return result[0];
};


/**
 * This could probably be simplified if we could find a way to simplify to basic math and use a math parser.
 * The hitch there is that owlbear doesn't handle parentheses. If we could split out the die rolling portions and roll
 * them in advance all results could then be handled with parens via a math parser.
 * We could use regex to find all simple dice notations: (\d+)?d(\d+) and then resolve those and search again to resolve
 * for any notations nested in parens like 4d(1d4)
 * @param value
 * @param randomGenerator
 * @constructor
 */
const RollDiceNotation = (value, randomGenerator = getRandomGenerator()) => {
    const parsedOwlbearResult = new Owlbear().parse(value);
    return evalOwlbearResult(parsedOwlbearResult, randomGenerator);
};
export default RollDiceNotation;

