import RolledValueChartData from '../../../src/models/DiceNotationValueChartData'

const buildChartItems = (names) => {
    return names.map(buildItem)
};

const buildItem = (name) => {
    return new RolledValueChartData(name, "5+2d4", "gp");
};

const gemstoneNames = ["Agate", "Alabaster", "Azurite", "Hematite", "Lapis lazuli", "Malachite", "Obsidian", "Pearl, irregular freshwater", "Pyrite", "Rhodochrosite", "Quartz, rock crystal", "Shell", "Tigereye", "Turquoise"];

export default buildChartItems(gemstoneNames)