import RolledValueChartData from '../../../src/models/RolledValueChartData'

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

export default buildChartItems(gemstoneNames)