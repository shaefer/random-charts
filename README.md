# Random Charts #

A small library for the easy creation of random charts.

## Setup
* npm install
* npm run build (jshint and mocha test run via phantomjs)

## There are two files of note ##
* RandomCharts.html (Run this to exercise the code)
* SpecRunner.html (Run this to run the Mocha tests in the browser)

## To make a new random chart class and get a random item ##
```javascript
var items = ["Item1", "Item2"];
var chart = RandomChart.create("NewChartName", items);
var randomSelection = chart.get();

//If you charts are built outside your code or imported by the included charts...just use the named charts
var randomSelection2 = RandomChart.NewChartName.get();

//The list of all available charts is maintained on RandomChart.chartNames
var arrayOfChartNames = RandomChart.chartNames;

//Get me one item from each chart
var retrievedItems = [];
arrayOfChartNames.forEach(function(chartName) {
    retrievedItems.push(RandomChart[chartName].get());
});
```

```
[
  {
    "index": 1,
    "text": "Item2"
  }
]
```