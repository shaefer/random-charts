import Owlbear from 'owlbear';
import {rollDice} from '../selectionMethodologies/DiceRollItemSelection';
import seedrandom from 'seedrandom';

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
    console.log("OWLBEAR ITEMS");
    console.log(originalResult);
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
        console.log(result);
    }
    return result[0];
};

const getRandomGenerator = (randomSeed) => {
    if (randomSeed) {
        return seedrandom(randomSeed);
    } else {
        return seedrandom();
    }
};

const RollDiceNotation = (value, randomSeed) => {
    const randomGenerator = getRandomGenerator(randomSeed);
    const parsedOwlbearResult = new Owlbear().parse(value);
    return evalOwlbearResult(parsedOwlbearResult, randomGenerator);
};
export default RollDiceNotation;

