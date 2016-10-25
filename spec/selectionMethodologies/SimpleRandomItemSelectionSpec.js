import SimpleRandomItemSelection from '../../src/selectionMethodologies/SimpleRandomItemSelection'
import { expect } from 'chai'

describe('SimpleRandomItemSelectionSpec', function() {
  describe('getItem', function () {
    it('should randomly select an item evenly distributed', function() {
      const items = ["1", "2"];
      const random = Math.random;
      const item = new SimpleRandomItemSelection().getItem(items, random);
      expect(item.result).to.be.ok;
      expect(item.index).to.be.above(-1);
    });
  });
});