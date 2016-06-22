"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DiceChart = function (_RandomChart) {
  _inherits(DiceChart, _RandomChart);

  function DiceChart(chartName, numOfDice, numOfSides, itemList, randomSeed) {
    _classCallCheck(this, DiceChart);

    var numOfItemsPossibleWithDice = numOfDice * numOfSides - numOfDice + 1;
    if (numOfItemsPossibleWithDice != itemList.length) throw new Error("A chart of " + numOfDice + "d" + numOfSides + " items should have " + numOfItemsPossibleWithDice + " items. You have specified " + itemList.length + ".");

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(DiceChart).call(this, chartName, itemList, randomSeed));

    _this.numOfDice = numOfDice;
    _this.numOfSides = numOfSides;
    return _this;
  }

  _createClass(DiceChart, [{
    key: "add",
    value: function add(a, b) {
      return a + b;
    }
  }, {
    key: "rollDice",
    value: function rollDice(numOfDice, numOfSides) {
      var diceRolled = [];
      for (var i = 0; i < numOfDice; i++) {
        var dieRoll = Math.floor(this.random() * numOfSides) + 1;
        diceRolled.push(dieRoll);
      }

      var sum = diceRolled.reduce(this.add, 0);
      var result = { total: sum, diceRolled: diceRolled };
      return result;
    }
  }, {
    key: "getItem",
    value: function getItem() {
      var numOfDice = this.numOfDice;
      var results = this.rollDice(numOfDice, this.numOfSides);
      var index = results.total - numOfDice;
      var item = this.items[index];
      return { index: index, item: item, rollResults: results };
    }
  }]);

  return DiceChart;
}(RandomChart);