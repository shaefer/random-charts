import RolledValueChartData from '../../../src/models/DiceNotationValueChartData'

const buildChartItems = (names) => {
    return names.map(buildItem)
};

const buildItem = (name) => {
    return new RolledValueChartData(name, "2d4*500+2500", "gp");
};

const gemstoneNames = [
    "Diamond, large",
    "Emerald, brilliant green",
    "Ruby, large",
    "Sapphire, star"
];

export default {name:"Greater Precious Gem (5,000gp; Craft DC 25)", items:buildChartItems(gemstoneNames)}