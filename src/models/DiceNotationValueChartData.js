import RollDiceNotation from './RollDiceNotation';
import getRandomGenerator from './GetRandomGenerator';

export default class DiceNotationValueChartData {
    constructor(name, value, label, randomGenerator = getRandomGenerator()) {
        this.name = name;
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
        if (!this.rolledValue)
            this.rollValue();
        return this.rolledValue;
    }

    rollValue() {
        this.rolledValue = this.rollDiceNotation(this.value, this.randomGenerator);
        return this;
    }

    toString() {
        return `${this.name} ${this.getRolledValue()}${this.label}`;
    }
}