import ChartData from '../../../models/DiceNotationValueChartData';
import GemstoneGrade1 from '../gemstones/GemstoneGrade1';
import GemstoneGrade2 from '../gemstones/GemstoneGrade2';
//http://paizo.com/pathfinderRPG/prd/ultimateEquipment/appendix.html#type-b-treasure-coins-and-gems-table
// 10 gp	Grade 1 gemstone
// 15 gp	2d6 × 10 cp, 4d8 sp, 1d4 gp, grade 1 gemstone
// 25 gp	5d10 sp, 1d4 gp, two grade 1 gemstones
// 50 gp	Grade 2 gemstone
// 50 gp	3d6 × 10 sp, 3d6 gp, three grade 1 gemstones
// 75 gp	1d4 × 10 sp, 1d4 gp, two grade 1 gemstones, grade 2 gemstone
// 100 gp	Grade 3 gemstone
// 100 gp	3d8 × 10 sp, 4d8 gp, two grade 1 gemstones, grade 2 gemstone
// 150 gp	Grade 2 gemstone, grade 3 gemstone
// 200 gp	3d6 × 10 sp, 2d4x10 gp, four grade 1 gemstones, grade 3 gemstone
// 250 gp	2d4 × 10 gp, two grade 2 gemstones, grade 3 gemstone
// 500 gp	Grade 4 gemstone
// 500 gp	2d4 × 10 gp, 2d4 pp, two grade 2 gemstones, three grade 3 gemstones
// 750 gp	2d4 × 10 gp, two grade 2 gemstones, grade 3 gemstone, grade 4 gemstone
// 1,000 gp	Grade 5 gemstone
// 1,000 gp	3d6 × 10 gp, 4d4 pp, three grade 3 gemstones, grade 4 gemstone
// 2,500 gp	2d4 × 100 gp, two grade 4 gemstones, grade 5 gemstone
// 5,000 gp	Grade 6 gemstone
// 5,000 gp	2d4 × 100 gp, 2d4x10 pp, two grade 4 gemstones, three grade 5 gemstones
// 10,000 gp	Five grade 5 gemstones, grade 6 gemstone
// 20,000 gp	4d8 × 100 gp, 6d10x10 pp, three grade 6 gemstones
// 50,000 gp	4d4 × 10 pp, ten grade 3 gemstones, four grade 4 gemstones, six grade 5 gemstones, eight grade 6 gemstones
const linkedChartRoll = (chartName, times = 1) => ({linkedTable:chartName, description:times + " " + chartName, times:times});

const Copper = (value) => {
    return new ChartData("", value, "cp");
};

const Silver = (value) => {
    return new ChartData("", value, "sp");
};

const Gold = (value) => {
    return new ChartData("", value, "gp");
};

const items = [
    linkedChartRoll(GemstoneGrade1.name),
    [Copper("2d6*10"), Silver("4d8"), Gold("1d4"), linkedChartRoll(GemstoneGrade1.name)],
    [Silver("5d10"), Gold("1d4"), linkedChartRoll(GemstoneGrade1.name, 2)],
    linkedChartRoll(GemstoneGrade2.name),

];

const parentTable = {name:"Type B Treasure, Coins and Gems", items:items, tables:[GemstoneGrade1, GemstoneGrade2]};
const mergedTables = [parentTable].concat(parentTable.tables);
parentTable.tables = mergedTables;

export default parentTable;