"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var UniqueTavernTraits = function (_RandomChart) {
  _inherits(UniqueTavernTraits, _RandomChart);

  function UniqueTavernTraits(randomSeed) {
    _classCallCheck(this, UniqueTavernTraits);

    var items = ["Only opens on public holidays", "In a former church", "In a former theater", "In a farmhouse", "In a cellar", "Partly ruined", "Stocks or gallows inside", "Magical lighting that slowly shifts hues", "Full of the owner's dogs", "Previous owner is buried in the cellar", "Full of cats", "Mounted monster head", "Haunted grandfather clock that strikes thirteen", "Recently was partially burnt down", "Central pit for entertainment", "A fortified keep with its own armory", "Furniture is made from stone", "Drinks delivered by magical or mechanical means", "In a lighthouse", "Extremely low ceilings", "Bar is made from a sunken warship", "Stuffed heads and antlers on every wall", "Run by five sisters", "Haunted", "Once run by a succubus", "Holds prayers every day", "Unusual beverages bubbling behind the bar", "Assigns seats at random", "Adorned with numerous banners and weapons", "Full of small caged animals", "Collectively owned by the locals", "Pentagram is carved on one wall", "Every stranger who arrives must sing to be served", "Mummified remains of a local hero are on display", "Requires bar tabs signed in blood", "Has an unusual mascot", "Small, labyrinthine halls and rooms", "Permanent recurring illusion", "Patrons must spin the wheel to choose their drink", "Original owner stuffed and mounted above bar", "Home of 'endless stew' (kept simmering for 30 years)", "Fruit growing just outside is free for the plucking", "Obnoxious patrons get thrown off the balcony", "Lit with magic lanterns or bioluminescent creatures", "Has a tree growing through the taproom"];
    return _possibleConstructorReturn(this, Object.getPrototypeOf(UniqueTavernTraits).call(this, "UniqueTavernTraits", items, randomSeed));
  }

  return UniqueTavernTraits;
}(RandomChart);