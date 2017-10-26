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
import {SimpleRandomChart, CreateChartForItems} from './SimpleRandomChart';
const items = ["Item1", "Item2"];
const chart = SimpleRandomChart("NewChartName", items); 
//OR const chart = CreateChartForItems(items); (creates a random chart name for you.)
const singleItem = chart.get();
const sixItems = chart.get(6);
```
Example showing item selection with dice rolling. More than 1 die rolled produces a bell curve. [2d4 Bell curve from AnyDice](http://anydice.com/program/4d6)
```javascript
//Basic Chart with items selected by Rolling Dice (2d4 Bell curve)
const diceItems = ["2", "3", "4", "5", "6", "7", "8"];
const selectionStrategy2d4 = new DiceRollItemSelection(2, 4);
const diceChart = SimpleRandomChart("DiceChart", diceItems, "randSeed", selectionStrategy2d4;
const singleDiceItem = chart.get(); //rolled 2d4 to get an item from the chart.
const sixDiceItems = chart.get(6);
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

Example showing rolling a table that links to other tables.
```javascript
RandomChart
const subTable = {
    linked: false,
    name: "A SubTable",
    items: ["Chart2-A", "Chart2-B", "Chart2-C"]
};
const mainTable = {
    name: "Some Linked Chart",
    items: ["Chart1-1", "Chart1-2", "Chart1-3", {linkedTable:subTable.name, description:"Roll on Subtable: " + subTable.name}]
};

const randomSeedThatReturnsIndexOf3ToForceTestOfLinkedItem = 3; //get the linkedItem to demonstrate rolling into subtables
const chart = new LinkedChart(mainTable.name, mainTable.items, [subTable], randomSeedThatReturnsIndexOf3ToForceTestOfLinkedItem);
const singleItem = chart.get(); //
```

```
//Linked chart result example
[
  { 
    index: 3,
    item:
        { 
            linkedTable: 'A SubTable',
            description: 'Roll on Subtable: A SubTable' 
        },
    subResult: 
    [ 
        { 
            index: 2, 
            item: 'Chart2-C' 
        } 
    ] 
  }
]
```

