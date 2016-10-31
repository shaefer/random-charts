import RollDiceNotation from './RollDiceNotation';
export default class DiceNotationValueChartData {
    constructor(name, value, label) {
        this.name = name;
        this.value = value;
        this.label = label;
        this.rollDiceNotation = RollDiceNotation;
    }
}

