import ChartValue from '../../../models/DiceNotationValueChartData';
import GemstoneGrade1 from '../gemstones/GemstoneGrade1';
import GemstoneGrade2 from '../gemstones/GemstoneGrade2';
import GemstoneGrade3 from '../gemstones/GemstoneGrade3';
import GemstoneGrade4 from '../gemstones/GemstoneGrade4';
import GemstoneGrade5 from '../gemstones/GemstoneGrade5';
import GemstoneGrade6 from '../gemstones/GemstoneGrade6';

const linkedChartRoll = (chartName, times = 1) => ({linkedTable:chartName, description:times + " " + chartName, times:times});

const Copper = (value) => {
    return new ChartValue("", value, "cp");
};

const Silver = (value) => {
    return new ChartValue("", value, "sp");
};

const Gold = (value) => {
    return new ChartValue("", value, "gp");
};

const Platinum = (value) => {
    return new ChartValue("", value, "pp");
};

/* The reality here is that each of these entries by gp value are a chart. 
Most are single value tables that may end up rolling on sub charts.
But really the parent chart just has a single item that isn't really rolled. 
It is guaranteed. A DM will select the gp value and use that chart*/ 

// 10 gp	Grade 1 gemstone
const gp10Name = "10gp Type B Treasure, Coins and Gems";
const gp10TypeB = {name: gp10Name, items:[linkedChartRoll(GemstoneGrade1.name)], tables:[gp10Name, GemstoneGrade1]};
// 15 gp	2d6 × 10 cp, 4d8 sp, 1d4 gp, grade 1 gemstone
const gp15Name = "15gp Type B Treasure, Coins and Gems";
const gp15TypeB = {name: gp15Name, items:[[Copper("2d6*10"), Silver("4d8"), Gold("1d4"), linkedChartRoll(GemstoneGrade1.name)]], tables:[gp15Name, GemstoneGrade1]};
// 25 gp	5d10 sp, 1d4 gp, two grade 1 gemstones
const gp25Name = "25gp Type B Treasure, Coins and Gems";
const gp25TypeB = {name: gp25Name, items:[[Silver("5d10"), Gold("1d4"), linkedChartRoll(GemstoneGrade1.name, 2)]], tables:[gp25Name, GemstoneGrade1]};
// 50 gp	Grade 2 gemstone
// 50 gp	3d6 × 10 sp, 3d6 gp, three grade 1 gemstones
const gp50Name = "50gp Type B Treasure, Coins and Gems";
const gp50TypeB = {name: gp50Name, items:[
    linkedChartRoll(GemstoneGrade2.name), 
    [Silver("3d6*10"), Gold("3d6"), linkedChartRoll(GemstoneGrade1.name, 3)]
], tables:[gp50Name, GemstoneGrade1, GemstoneGrade2]};
// 75 gp	1d4 × 10 sp, 1d4 gp, two grade 1 gemstones, grade 2 gemstone
const gp75Name = "75gp Type B Treasure, Coins and Gems";
const gp75TypeB = {name: gp75Name, items:[
    [Silver("1d4*10"), Gold("1d4"), linkedChartRoll(GemstoneGrade1.name, 2), linkedChartRoll(GemstoneGrade2.name)]
], tables:[gp75Name, GemstoneGrade1, GemstoneGrade2]};
// 100 gp	Grade 3 gemstone
// 100 gp	3d8 × 10 sp, 4d8 gp, two grade 1 gemstones, grade 2 gemstone
const gp100Name = "100gp Type B Treasure, Coins and Gems";
const gp100TypeB = {name: gp100Name, items:[
    linkedChartRoll(GemstoneGrade3.name), 
    [Silver("3d8*10"), Gold("4d8"), linkedChartRoll(GemstoneGrade1.name, 2), linkedChartRoll(GemstoneGrade2.name)]
], tables:[gp100Name, GemstoneGrade1, GemstoneGrade2, GemstoneGrade3]};
// 150 gp	Grade 2 gemstone, grade 3 gemstone
const gp150Name = "150gp Type B Treasure, Coins and Gems";
const gp150TypeB = {name: gp150Name, items:[[linkedChartRoll(GemstoneGrade2.name), linkedChartRoll(GemstoneGrade3.name)]], tables:[gp150Name, GemstoneGrade2, GemstoneGrade3]};
// 200 gp	3d6 × 10 sp, 2d4x10 gp, four grade 1 gemstones, grade 3 gemstone
const gp200Name = "200gp Type B Treasure, Coins and Gems";
const gp200TypeB = {name: gp200Name, items:[[Silver("3d6*10"), Gold("2d4*10"), linkedChartRoll(GemstoneGrade1.name, 4), linkedChartRoll(GemstoneGrade3.name)]], tables:[gp200Name, GemstoneGrade1, GemstoneGrade3]};
// 250 gp	2d4 × 10 gp, two grade 2 gemstones, grade 3 gemstone
const gp250Name = "250gp Type B Treasure, Coins and Gems";
const gp250TypeB = {
    name: gp250Name, 
    items:[[Gold("2d4*10"), linkedChartRoll(GemstoneGrade2.name, 2), linkedChartRoll(GemstoneGrade3.name)]], 
    tables:[gp250Name, GemstoneGrade2, GemstoneGrade3]};
// 500 gp	Grade 4 gemstone
// 500 gp	2d4 × 10 gp, 2d4 pp, two grade 2 gemstones, three grade 3 gemstones
const gp500Name = "500gp Type B Treasure, Coins and Gems";
const gp500TypeB = {
    name: gp500Name, 
    items:[
        linkedChartRoll(GemstoneGrade4.name),
        [Gold("2d4*10"), Platinum("2d4"), linkedChartRoll(GemstoneGrade2.name, 2), linkedChartRoll(GemstoneGrade3.name, 3)]
    ], 
    tables:[gp500Name, GemstoneGrade2, GemstoneGrade3, GemstoneGrade4]};
// 750 gp	2d4 × 10 gp, two grade 2 gemstones, grade 3 gemstone, grade 4 gemstone
const gp750Name = "750gp Type B Treasure, Coins and Gems";
const gp750TypeB = {
    name: gp750Name, 
    items:[
        [Gold("2d4*10"), linkedChartRoll(GemstoneGrade2.name, 2), linkedChartRoll(GemstoneGrade3.name), linkedChartRoll(GemstoneGrade4.name)]
    ], 
    tables:[gp750Name, GemstoneGrade2, GemstoneGrade3, GemstoneGrade4]};
// 1,000 gp	Grade 5 gemstone
// 1,000 gp	3d6 × 10 gp, 4d4 pp, three grade 3 gemstones, grade 4 gemstone
const gp1000Name = "1000gp Type B Treasure, Coins and Gems";
const gp1000TypeB = {
    name: gp1000Name, 
    items:[
        linkedChartRoll(GemstoneGrade5.name),
        [Gold("3d6*10"), Platinum("4d4"), linkedChartRoll(GemstoneGrade3.name, 3), linkedChartRoll(GemstoneGrade4.name)]
    ], 
    tables:[gp1000Name, GemstoneGrade3, GemstoneGrade4, GemstoneGrade5]};
// 2,500 gp	2d4 × 100 gp, two grade 4 gemstones, grade 5 gemstone
const gp2500Name = "2500gp Type B Treasure, Coins and Gems";
const gp2500TypeB = {
    name: gp2500Name, 
    items:[[Gold("2d4*100"), linkedChartRoll(GemstoneGrade4.name, 2), linkedChartRoll(GemstoneGrade5.name)]], 
    tables:[gp2500Name, GemstoneGrade4, GemstoneGrade5]};
// 5,000 gp	Grade 6 gemstone
// 5,000 gp	2d4 × 100 gp, 2d4x10 pp, two grade 4 gemstones, three grade 5 gemstones
const gp5000Name = "5000gp Type B Treasure, Coins and Gems";
const gp5000TypeB = {
    name: gp5000Name, 
    items:[
        linkedChartRoll(GemstoneGrade6.name),
        [Gold("2d4*100"), Platinum("2d4*10"), linkedChartRoll(GemstoneGrade4.name, 2), linkedChartRoll(GemstoneGrade5.name, 3)]
    ], 
    tables:[gp5000Name, GemstoneGrade4, GemstoneGrade5, GemstoneGrade6]};
// 10,000 gp	Five grade 5 gemstones, grade 6 gemstone
const gp10000Name = "10000gp Type B Treasure, Coins and Gems";
const gp10000TypeB = {
    name: gp10000Name, 
    items:[[linkedChartRoll(GemstoneGrade5.name, 5), linkedChartRoll(GemstoneGrade6.name)]], 
    tables:[gp10000Name, GemstoneGrade5, GemstoneGrade6]};
// 20,000 gp	4d8 × 100 gp, 6d10x10 pp, three grade 6 gemstones
const gp20000Name = "20000gp Type B Treasure, Coins and Gems";
const gp20000TypeB = {
    name: gp20000Name, 
    items:[[Gold("4d8*100"), Platinum("6d10*10"), linkedChartRoll(GemstoneGrade6.name, 3)]], 
    tables:[gp20000Name, GemstoneGrade5, GemstoneGrade6]};
// 50,000 gp	4d4 × 10 pp, ten grade 3 gemstones, four grade 4 gemstones, six grade 5 gemstones, eight grade 6 gemstones
const gp50000Name = "50000gp Type B Treasure, Coins and Gems";
const gp50000TypeB = {
    name: gp50000Name, 
    items:[[Platinum("4d4*10"), linkedChartRoll(GemstoneGrade3.name, 10), linkedChartRoll(GemstoneGrade4.name, 4), linkedChartRoll(GemstoneGrade5.name, 6), linkedChartRoll(GemstoneGrade6.name, 8)]], 
    tables:[gp50000Name, GemstoneGrade3, GemstoneGrade4, GemstoneGrade5, GemstoneGrade6]};


export default {10:gp10TypeB, 15:gp15TypeB, 25:gp25TypeB, 50:gp50TypeB, 75:gp75TypeB, 100:gp100TypeB, 
    150:gp150TypeB, 200:gp200TypeB, 250:gp250TypeB, 500:gp500TypeB, 750:gp750TypeB, 1000:gp1000TypeB, 
    2500:gp2500TypeB, 5000:gp5000TypeB, 10000:gp10000TypeB, 20000:gp20000TypeB, 50000:gp50000TypeB}



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