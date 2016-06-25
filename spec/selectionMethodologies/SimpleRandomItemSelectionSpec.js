var SimpleRandomItemSelection = require('../../src/selectionMethodologies/SimpleRandomItemSelection'),
    expect = require('chai').expect;

describe('SimpleRandomItemSelectionSpec', function() {
  describe('getItem', function () {
    it('should randomly select an item evenly distributed', function() {
      var randomSelection = new SimpleRandomItemSelection();
      var items = ["1", "2"];
      var random = Math.random;
      var item = randomSelection.getItem(items, random);
      expect(item.item).to.be.ok;
      expect(item.index).to.be.above(-1);
    });
  });
});