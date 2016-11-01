export default class ChartOutput {
    constructor(results) {
        this.results = results;
    }

    getResult(i = 0) {
        return this.results[i].result;
    }
}