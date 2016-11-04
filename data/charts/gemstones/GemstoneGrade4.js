import RolledValueChartData from '../../../src/models/DiceNotationValueChartData'

const buildChartItems = (names) => {
    return names.map(buildItem)
};

const buildItem = (name) => {
    return new RolledValueChartData(name, "2d4*50+250", "gp");
};

const gemstoneNames = [
    "Aquamarine",
    "Opal",
    "Pearl, black",
    "Topaz"
];

export default {name:"Greater Semi-Precious Gem (Craft DC 20)", items:buildChartItems(gemstoneNames)}