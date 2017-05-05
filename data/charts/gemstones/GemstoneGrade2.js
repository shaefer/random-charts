import RolledValueChartData from '../../../models/DiceNotationValueChartData'

const buildChartItems = (names) => {
    return names.map(buildItem)
};

const buildItem = (name) => {
    return new RolledValueChartData(name, "2d4*5+25", "gp");
};

const gemstoneNames = [
    "Bloodstone",
    "Carnelian",
    "Chrysoprase",
    "Citrine",
    "Ivory",
    "Jasper",
    "Moonstone",
    "Onyx",
    "Peridot",
    "Quartz, milky, rose, or smoky",
    "Sard",
    "Sardonyx",
    "Spinel, red or green",
    "Zircon"
];

export default {name: "Gemstone Grade 2: Lesser Semi-Precious Gem (Craft DC 12)", items: buildChartItems(gemstoneNames)}
