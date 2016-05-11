# Random Charts #

A small library for the easy creation of random charts.

## Setup
* npm install
* npm run build (jshint and mocha test run via phantomjs)

## There are two files of note ##
* RandomCharts.html (Run this to exercise the code)
* SpecRunner.html (Run this to run the Mocha tests in the browser)

## To make a new random chart ##
```javascript
var items = ["Item1", "Item2"];
RandomChart.create("NewChartClassName", items);
var randomSelection = new NewChartClassName().get();
```