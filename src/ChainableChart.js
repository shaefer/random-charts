class SingleChainChart extends RandomChart {
  constructor(chartName, itemList, linkedChart, randomSeed) {
    super(chartName, itemList, randomSeed);
    this.linkedChart = linkedChart;
  }


}