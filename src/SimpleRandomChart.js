import RandomChart from './RandomChart';
import ChartData from './models/ChartData';

export const SimpleRandomChart = (chartName, items, randomGenerator, itemSelectionMethod) => {
    return new RandomChart(convertItemsToChartData(chartName, items), randomGenerator, itemSelectionMethod);
}

export const CreateChartForItems = (items) => {
    var randomName = Math.random().toString(36).substring(7);
    return new RandomChart(convertItemsToChartData(`chart-${randomName}`, items));
}

const convertItemsToChartData = (chartName, items) => {
    return new ChartData(chartName, items);
};