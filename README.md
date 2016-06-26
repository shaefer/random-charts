# Random Charts #

[ ![Codeship Status for shaefer/random-charts](https://codeship.com/projects/84bbc1a0-1df9-0134-65af-1e312222cad2/status?branch=master)](https://codeship.com/projects/160049)
[ ![npm version](https://badge.fury.io/js/random-charts.png)](https://badge.fury.io/js/random-charts)

A small library for the easy creation of random charts.

## Setup
* Assumes node installed
* npm install
* npm run build (jshint, clean, babel, test)

## Usage Examples ##
Note: Items in a chart can be just Strings or a deep object. (See tests in the charts folder.)

```javascript
//Basic Chart (basic items selection = equal chance of all items)
var items = ["Item1", "Item2"];
var chart = new RandomChart("NewChartName", items);
var singleItem = chart.get();
var sixItems = chart.get(6);
```
Example showing item selection with dice rolling. More than 1 die rolled produces a bell curve. [2d4 Bell curve from AnyDice](http://anydice.com/program/4d6)
```javascript
//Basic Chart with items selected by Rolling Dice (2d4 Bell curve)
var diceItems = ["2", "3", "4", "5", "6", "7", "8"];
var selectionStrategy2d4 = new DiceRollItemSelection(2, 4);
var diceChart = new RandomChart("DiceChart", diceItems, "randSeed", selectionStrategy2d4;
var singleDiceItem = chart.get(); //rolled 2d4 to get an item from the chart.
var sixDiceItems = chart.get(6);
```

```
//chart result example
[
  {
    "index": 1,
    "item": "Item2"
  }
]
```