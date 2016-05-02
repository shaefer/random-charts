# Random Charts (Pathfinder)#

A series of Javascript files for the easy creation of random charts from the Pathfinder Gamemastery Guide

## There are two files of note ##
* RandomCharts.html (Run this to exercise the code)
* SpecRunner.html (Run this to run the Jasmine tests)

## To make a new random chart ##
```javascript
var items = ["Item1", "Item2"];
RandomChart.create("NewChartClassName", items);
var randomSelection = new NewChartClassName().get();
```