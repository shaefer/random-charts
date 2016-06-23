describe('DiceRollItemSelectionSpec', function() {
  describe('getItem', function () {
    it('should randomly select an item evenly distributed', function() {
      var diceSelection = new DiceRollItemSelection(2, 4);
      var items = ["2", "3", "4", "5", "6", "7", "8"];
      var random = Math.random;
      var item = diceSelection.getItem(items, random);
      expect(item.item).to.be.ok;
      expect(item.index).to.be.above(-1);
    });
    it('should throw an error if the items do not match the dice combinations', function() {
      var diceSelection = new DiceRollItemSelection(2, 4);
      var items = ["2", "3", "4", "5"];
      var random = Math.random;
      var func = function() {
        diceSelection.getItem(items, random);
      }
      expect(func).to.throw(/A chart of 2d4 items should have 7 items. You have specified 4./);
    });
  });

  describe('rollDice', function () {
    it('should have result object with total and individual die results.', function() {
      var rollMethod = new DiceRollItemSelection(2, 6)
      var results = rollMethod.rollDice(2, 6, new Math.seedrandom("Fixed"));
      expect(results.diceRolled.length).to.eql(2);
      expect(results.diceRolled[0]).to.eql(4);
      expect(results.diceRolled[1]).to.eql(2);
      expect(results.total).to.eql(6);
    });
  });

  describe('add', function () {
    it('should add two numbers together', function() {
      var rollMethod = new DiceRollItemSelection(2, 6)
      var result = rollMethod.add(2, 6);
      expect(result).to.eql(8);
    });
  });
});