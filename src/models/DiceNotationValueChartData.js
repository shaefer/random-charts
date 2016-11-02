import RollDiceNotation from './RollDiceNotation';
import getRandomGenerator from './GetRandomGenerator';

const isArray = (o) => {
    return Object.prototype.toString.call(o) === '[object Array]';
};


const mapValues = (random, i) => {
    return RollDiceNotation(i, random);
};

export default class DiceNotationValueChartData {
    constructor(name, value, label, randomGenerator = getRandomGenerator()) {
        this.name = name;
        if (isArray(value))
            this.multiValue = true;
        this.value = value;
        this.label = label;
        this.rollDiceNotation = RollDiceNotation;
        this.rolledValue = null;
        this.randomGenerator = randomGenerator;
    }

    /**
     * Allows the user to delay the setting until ready to retrieve.
     * @param randomGenerator
     */
    setRandomGenerator(randomGenerator) {
        this.randomGenerator = randomGenerator;
    }

    getRolledValue() {
        if (!this.rolledValue) {
            this.rollValue();
        }
        return this.rolledValue;
    }

    rollValue() {
        let rolledValue;
        if (this.multiValue) {
            rolledValue = this.value.map(mapValues.bind(null, this.randomGenerator));
        }
        else
            rolledValue = this.rollDiceNotation(this.value, this.randomGenerator);
        this.rolledValue = rolledValue;
        return this;
    }

    toString() {
        const rolledValue = this.getRolledValue();
        if (this.multiValue) {
            const values = rolledValue.join(", ");
            return `${this.name} ${values}${this.label}`;
        }
        return `${this.name} ${rolledValue}${this.label}`;
    }
}