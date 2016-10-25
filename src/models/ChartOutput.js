export default class ChartOutput {
    constructor(chartName, results, timesRolled) {
        this.chartName = chartName;
        this.results = results;
        this.timesRolled = timesRolled;
    }

    getFlattenedResults() {
        return this.results.map((item) => {
            if (item.result.subResults) {
                return item.result.subResults.getFlattenedResults();
            } else {
                return item;
            }
        });
    }
}