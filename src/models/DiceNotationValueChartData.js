import RollDiceNotation from './RollDiceNotation';

const isArray = (o) => {
    return Object.prototype.toString.call(o) === '[object Array]';
};


const mapValues = (random, i) => {
    return RollDiceNotation(i, random);
};

export default class DiceNotationValueChartData {
    constructor(name, value, label) {
        this.name = name;
        if (isArray(value))
            this.multiValue = true;
        this.value = value;
        this.label = label;
        this.rollDiceNotation = RollDiceNotation;
    }


    getValue(randomSeed) {
        if (this.multiValue) {
            return this.value.map(mapValues.bind(null, randomSeed));
        }
        else
            return this.rollDiceNotation(this.value, randomSeed);
    }

    toString(randomSeed) {
        if (this.multiValue) {
            const values = this.getValue(randomSeed).join(", ");
            return `${this.name} ${values}${this.label}`;
        }
        return `${this.name} ${this.getValue(randomSeed)}${this.label}`;
    }
}

