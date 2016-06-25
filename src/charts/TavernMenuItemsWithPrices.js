var RandomChart = require('../RandomChart');

module.exports = class TavernMenuItemsWithPrices extends RandomChart {
  constructor(randomSeed) {
    var items = [
      {name:"Apple cake", price: "2 cp"},
      {name: "Aunt Polly's pudding", price: "1 sp"},
      {name: "Boiled eels", price:"2 sp"},
      {name: "Boiled rabbit", price: "1 sp"},
      {name: "Boiled salmon", price:" (3 sp)"},
      {name: "Boiled trotters", price:" (1 sp)"}
    ];
    super("TavernMenuItemsWithPrices", items, randomSeed);
  }
};