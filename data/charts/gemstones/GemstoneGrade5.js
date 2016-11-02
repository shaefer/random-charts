import RolledValueChartData from '../../../src/models/DiceNotationValueChartData'

const buildChartItems = (names) => {
    return names.map(buildItem)
};

const buildItem = (name) => {
    return new RolledValueChartData(name, "2d4*100+500", "gp");
};

const gemstoneNames = [
    "Diamond, small",
    "Emerald",
    "Ruby, small",
    "Sapphire"
];

export default buildChartItems(gemstoneNames)