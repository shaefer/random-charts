import {add, rollDice} from '../../src/selectionMethodologies/DiceRollItemSelection'
import DiceRollItemSelection from '../../src/selectionMethodologies/DiceRollItemSelection'
import seedrandom from 'seedrandom'
import { expect } from 'chai'

describe('DiceRollItemSelectionSpec', function() {
  describe('getItem', function () {
    it('should randomly select an item evenly distributed', function() {
      const diceSelection = new DiceRollItemSelection(2, 4);
      const items = ["2", "3", "4", "5", "6", "7", "8"];
      const random = Math.random;
      const item = diceSelection.getItem(items, random);
      expect(item.item).to.be.ok;
      expect(item.index).to.be.above(-1);
    });
    it('should throw an error if the items do not match the dice combinations', function() {
      const diceSelection = new DiceRollItemSelection(2, 4);
      const items = ["2", "3", "4", "5"];
      const random = Math.random;
      const func = function () {
          diceSelection.getItem(items, random);
      };
      expect(func).to.throw(/A chart of 2d4 items should have 7 items. You have specified 4./);
    });
  });

  describe('rollDice', function () {
    it('should have result object with total and individual die results.', function() {
      const results = rollDice(2, 6, seedrandom("Fixed"));
      expect(results.diceRolled.length).to.eql(2);
      expect(results.diceRolled[0]).to.eql(4);
      expect(results.diceRolled[1]).to.eql(2);
      expect(results.total).to.eql(6);
    });
  });

  describe('add', function () {
    it('should add two numbers together', function() {
      const result = add(2, 6);
      expect(result).to.eql(8);
    });
  });
});