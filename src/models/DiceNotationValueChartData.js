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
     * Always has a default generator in case the user doesn't care about seeding.
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
        this.rolledValue = this.multiValue ?
            this.value.map(mapValues.bind(null, this.randomGenerator)) :
            this.rollDiceNotation(this.value, this.randomGenerator);
        return this;
    }

    toString() {
        const rolledValue = !this.multiValue ? this.getRolledValue() : this.getRolledValue().join(", ");
        return `${this.name} ${rolledValue}${this.label}`;
    }
}