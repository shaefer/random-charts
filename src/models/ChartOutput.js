export default class ChartOutput {
    constructor(results) {
        this.results = results;
    }

    getResult(i = 0) {
        return this.results[i].result;
    }

    toArray() {
      return this.results.map((r) => r.result.toString());
    }

    toString() {
      return this.toArray().join(", ");
    }
}
