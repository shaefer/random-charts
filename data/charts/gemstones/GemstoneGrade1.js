import RolledValueChartData from '../../../src/models/DiceNotationValueChartData'
import ChartData from '../../../src/models/ChartData'

const buildChartItems = (names) => {
    return names.map(buildItem)
};

const buildItem = (name) => {
    return new RolledValueChartData(name, "5+2d4", "gp");
};

const gemstoneNames = ["Agate", "Alabaster", "Azurite", "Hematite", "Lapis lazuli", "Malachite", "Obsidian", "Pearl, irregular freshwater", "Pyrite", "Rhodochrosite", "Quartz, rock crystal", "Shell", "Tigereye", "Turquoise"];

const chart = new ChartData("Least Semi-Precious Gem", buildChartItems(gemstoneNames)).withDescription("Least Semi-Precious Gem (Craft DC 10)");
export default chart;