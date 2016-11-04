import ChartData from '../../data/charts/ChartWithMultipleItemsPerRoll';
import RandomChart from '../../src/RandomChart';
import LinkedChart from '../../src/LinkedChart';
import * as RandomChartSpec from '../RandomChartSpecHelper';
import getRandomGenerator from '../../src/models/GetRandomGenerator';
import DiceNotationValueChartData from '../../src/models/DiceNotationValueChartData';
import { expect } from 'chai';

describe('ChartWithMultipleItemsPerRoll', function() {
    it('should return gemstone item with rolled value', function() {
        const randomGeneratorForChart = getRandomGenerator("chartSeed");
        const chart = new RandomChart('Chart with entries containing 3 items', ChartData, randomGeneratorForChart);
        const output = RandomChartSpec.verifyGet(chart);
        expect(output.results.length).to.eql(3);
        const randomGenerator = getRandomGenerator("seed");
        output.results.forEach((i) => {
            i.result.setRandomGenerator(randomGenerator);
        });
        expect(output.getResult().rollValue().toString()).to.be.eql("Agate 12gp");
        expect(output.getResult(1).rollValue().toString()).to.be.eql("Alabaster 9gp");
        expect(output.getResult(2).rollValue().toString()).to.be.eql("Azurite 10gp");

        expect(chart.items.length).to.eql(2);
    });

    it('should handle deep chart references when chart has multiple items', function() {
        const subTable = {
            linked: false,
            name: "A SubTable",
            items: [new DiceNotationValueChartData("Decaying Chest", "10d10", "pp")]
        };
        const mainTable = {
            linked: true,
            name: "Some Linked Chart",
            items: [[new DiceNotationValueChartData("Sack of Gold", "5+2d4", "gp"),
                new DiceNotationValueChartData("Small silver idol", "10d6", "sp"),
                new DiceNotationValueChartData("Copper Brooch", "20d20", "cp"),
                {linkedTable:subTable.name, description:"Roll on Subtable: " + subTable.name}]]
        };

        const randomGeneratorForChart = getRandomGenerator("chartSeed");
        const chart = new LinkedChart(mainTable.name, mainTable.items, [subTable], randomGeneratorForChart);
        const output = RandomChartSpec.verifyGet(chart);
        expect(output.results.length).to.eql(4); //single roll will always yield the only item of 4 results. But the entry saying roll on another table still counts.
        const randomGenerator = getRandomGenerator("seed");
        output.results.forEach((i) => {
            if (i.result.setRandomGenerator)
                i.result.setRandomGenerator(randomGenerator);
        });
        expect(output.getResult().rollValue().toString()).to.be.eql("Sack of Gold 12gp");
        expect(output.results[0].chartName).to.be.eql(mainTable.name);
        expect(output.getResult(1).rollValue().toString()).to.be.eql("Small silver idol 32sp");
        expect(output.getResult(2).rollValue().toString()).to.be.eql("Copper Brooch 206cp");
        expect(output.getResult(3).rollValue().toString()).to.be.eql("Decaying Chest 54pp");
        expect(output.results[3].chartName).to.be.eql(subTable.name);

        expect(chart.items.length).to.eql(1); //chart itself only have 1 item (which contains 4 subitems)
    });
});