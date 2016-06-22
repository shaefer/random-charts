"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var RandomChart = function () {
  function RandomChart(chartName, itemList, randomSeed) {
    _classCallCheck(this, RandomChart);

    this.chartName = chartName;
    this.items = itemList;
    this.random = Math.random;
    if (Math.seedrandom) {
      if (randomSeed) {
        this.random = new Math.seedrandom(randomSeed);
        this.randomSeed = randomSeed;
      } else {
        this.random = new Math.seedrandom();
      }
    } else {
      console.warn("Math.seedrandom function is missing. Seedrandom library (https://github.com/davidbau/seedrandom) most likely has not been loaded. This will gracefully fallback to Math.random() behavior.");
    }
  }

  _createClass(RandomChart, [{
    key: "get",
    value: function get() {
      var times = arguments.length <= 0 || arguments[0] === undefined ? 1 : arguments[0];

      var items = this.items;
      var selectedItems = [];
      for (var i = 0; i < times; i++) {
        selectedItems.push(this.getItem());
      }
      return selectedItems;
    }
  }, {
    key: "getItem",
    value: function getItem() {
      var items = this.items;
      var index = Math.floor(this.random() * items.length);
      var item = items[index];
      return { index: index, item: item };
    }
  }]);

  return RandomChart;
}();