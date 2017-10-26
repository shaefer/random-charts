import RandomChart from './RandomChart';
import ChartData from './models/ChartData';
import seedrandom from 'seedrandom';

const randomChartIdMaker = new seedrandom();

export const SimpleRandomChart = (chartName, items, randomGenerator, itemSelectionMethod) => {
    return new RandomChart(convertItemsToChartData(chartName, items), randomGenerator, itemSelectionMethod);
};

export const CreateRandomChartFromItems = (items) => {
    var randomName = CreateRandomChartId();
    return SimpleRandomChart(`chart-${randomName}`, items);
};

export const CreateRandomChartId = () => {
    return randomChartIdMaker().toString(36).substring(7);
}

const convertItemsToChartData = (chartName, items) => {
    return new ChartData(chartName, items);
};