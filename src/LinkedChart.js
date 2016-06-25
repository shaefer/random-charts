var RandomChart = require('./RandomChart');

module.exports = class LinkedChart extends RandomChart {
  constructor(chartName, itemList, linkedChart, randomSeed) {
    super(chartName, itemList, randomSeed);
    this.linkedChart = linkedChart;
  }
};