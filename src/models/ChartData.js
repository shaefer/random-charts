export default class ChartData {
    constructor(name, items, subtables) {
        this.name = name;
        this.items = items;
        this.tables = subtables;
    }

    withDescription(description) {
        this.description = description;
        return this;
    }

    getTables() {
        return [this].concat(this.tables);
    }

    static toChartData(obj) {
        if (obj.name && obj.items) {
            return new ChartData(obj.name, obj.items, obj.subtables).withDescription(obj.description);
        }
        throw new Error("Cannot convert to chart data without the 'name' and 'items' properties");
    }
}