"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TavernMenuItems = function (_RandomChart) {
  _inherits(TavernMenuItems, _RandomChart);

  function TavernMenuItems(randomSeed) {
    _classCallCheck(this, TavernMenuItems);

    var items = ["Apple cake (2 cp)", "Aunt Polly's pudding (1 sp)", "Boiled eels (2 sp)", "Boiled rabbit (1 sp)", "Boiled salmon (3 sp)", "Boiled trotters (1 sp)", "Boiled turnips (5 cp)", "Bread and butter pudding (3 cp)", "Broiled mackerel (3 sp)", "Clear soup (2 cp)", "Crab, whole fresh (3 sp)", "Crayfish soup (4 cp)", "Fried cow-heel (8 cp)", "Fried woodcock with wine sauce (4 sp)", "Game pie (5 sp)", "Gosling with damson cheese (5 sp)", "Grouse with gooseberry jam (4 sp)", "Haggis (2 sp)", "Hare soup (6 cp)", "Hashed mutton (1 sp)", "Hotch potch (1 sp)", "Jugged hare (3 sp)", "Lamb cutlets (3 sp)", "Leg of mutton (4 sp)", "Marrow dumplings (8 cp)", "Meat pie (1 sp)", "Mutton pudding (1 sp)", "Oxtail soup (8 cp)", "Oyster soup (2 sp)", "Pie (1 sp)", "Potted partridge (4 sp)", "Ptarmigan (5 sp)", "Rissoles of game (4 sp)", "Roast fowl (6 sp)", "Roast goose with apple sauce (7 sp)", "Roast landrail (4 sp)", "Roast ribs of beef (3 sp)", "Roast suckling pig (1 gp)", "Rumpsteak and mushrooms (5 sp)", "Sausages (1 sp)", "Simmered gurnet (3 sp)", "Skate in caper sauce (3 sp)", "Stew (5 cp)", "Stewed kidneys (4 sp)", "Stewed pigeons (2 sp)", "Trout (3 sp)", "Turbot with truffles (2 gp)", "Veal cutlets (1 gp)", "Vegetable broth (3 cp)", "Whole local cheese (1 gp)"];
    return _possibleConstructorReturn(this, Object.getPrototypeOf(TavernMenuItems).call(this, "TavernMenuItems", items, randomSeed));
  }

  return TavernMenuItems;
}(RandomChart);