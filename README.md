# Random Charts #

[ ![Codeship Status for danielshaefer/random-charts](https://codeship.com/projects/c4d11720-fa8b-0133-1b2b-7a7dffd8f75f/status?branch=master)](https://codeship.com/projects/151624)
[ ![npm version](https://badge.fury.io/js/random-charts.png)](https://badge.fury.io/js/random-charts)

A small library for the easy creation of random charts.

## Setup
* npm install
* npm run build (jshint, clean, babel, test)

## To make a new random chart and get a random item ##

Note: Items in a chart can be just Strings or a deep object. (See tests in the charts folder.)

```javascript
//Basic Chart (basic items selection = equal chance of all items)
var items = ["Item1", "Item2"];
var chart = new RandomChart("NewChartName", items);
var randomSelection = chart.get();
```
```javascript
//Basic Chart with items selected by Rolling Dice (Bell curve)
var diceItems = ["Roll2", "Roll3", "Roll4", "Roll5", "Roll6", "Roll7", "Roll8"];
var diceChart = new RandomChart("DiceChart", diceItems, "MyRandomSeed", new DiceRollItemSelection(2, 4);
var randomSelection = chart.get(); //results are a bell curve due to rolling 2d4 to get an item from the chart.
```

```
[
  {
    "index": 1,
    "item": "Item2"
  }
]
```