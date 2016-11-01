import RolledValueChartData from '../../src/models/DiceNotationValueChartData'

const buildChartItems = (names) => {
    return names.map(buildItem)
};

const buildItem = (name) => {
    return new RolledValueChartData(name, "5+2d4", "gp");
};

const itemNames1 = ["Agate", "Alabaster", "Azurite"];
const itemNames2 = ["Topaz", "Diamond", "Ruby"];

export default [buildChartItems(itemNames1), buildChartItems(itemNames2)]