var RandomChart = require('./dist/RandomChart'),
    LinkedChart = require('./dist/RandomChart'),
    DiceRollItemSelection = require('./dist/selectionMethodologies/DiceRollItemSelection'),
    SimpleRandomItemSelection = require('./dist/selectionMethodologies/SimpleRandomItemSelection'),
    GetRandomGenerator = require('./dist/models/GetRandomGenerator'),
    TreasureTypeB = require('./dist/data/charts/treasureByType/TreasureTypeB');

module.exports = {
    RandomChart: RandomChart,
    LinkedChart: LinkedChart,
    DiceRollItemSelection: DiceRollItemSelection,
    SimpleRandomItemSelection: SimpleRandomItemSelection,
    GetRandomGenerator: GetRandomGenerator,
    TreasureTypeB: TreasureTypeB
};
