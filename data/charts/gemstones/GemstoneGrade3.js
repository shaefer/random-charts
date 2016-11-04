import RolledValueChartData from '../../../src/models/DiceNotationValueChartData'

const buildChartItems = (names) => {
    return names.map(buildItem)
};

const buildItem = (name) => {
    return new RolledValueChartData(name, "2d4*10+50", "gp");
};

const gemstoneNames = [
    "Amber",
    "Amethyst",
    "Chrysoberyl",
    "Coral",
    "Garnet",
    "Jade",
    "Jet",
    "Pearl, saltwater",
    "Spinel, deep blue",
    "Tourmaline"
];

export default {name:"Semi-Precious Gem (Craft DC 15)", items: buildChartItems(gemstoneNames)}