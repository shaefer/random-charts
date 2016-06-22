"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TavernMenuItemsWithPrices = function (_RandomChart) {
  _inherits(TavernMenuItemsWithPrices, _RandomChart);

  function TavernMenuItemsWithPrices(randomSeed) {
    _classCallCheck(this, TavernMenuItemsWithPrices);

    var items = [{ name: "Apple cake", price: "2 cp" }, { name: "Aunt Polly's pudding", price: "1 sp" }, { name: "Boiled eels", price: "2 sp" }, { name: "Boiled rabbit", price: "1 sp" }, { name: "Boiled salmon", price: " (3 sp)" }, { name: "Boiled trotters", price: " (1 sp)" }];
    return _possibleConstructorReturn(this, Object.getPrototypeOf(TavernMenuItemsWithPrices).call(this, "TavernMenuItemsWithPrices", items, randomSeed));
  }

  return TavernMenuItemsWithPrices;
}(RandomChart);