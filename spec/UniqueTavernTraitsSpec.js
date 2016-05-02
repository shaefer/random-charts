describe('UniqueTavernTraits', function() {
  describe('get()', function(){
    it('should get a random item from the list', function() {
    	var traits = new UniqueTavernTraits();
    	var items = traits.get();
      var item = items[0];
    	expect(item.text.length).toBeGreaterThan(0);
    	expect(item.text).toEqual(jasmine.anything());
        expect(item.index).toBeGreaterThan(-1);
        expect(item.index).toBeLessThan(45);
        console.warn('index: ' + item.index)
    });
    it('should get multiple random items from the list', function() {
      var traits = new UniqueTavernTraits();
      var items = traits.get(2);
      var item1 = items[0];
      var item2 = items[1];

      expect(items.length).toEqual(2);

      expect(item1.text.length).toBeGreaterThan(0);
      expect(item1.text).toEqual(jasmine.anything());
      expect(item1.index).toBeGreaterThan(-1);
      expect(item1.index).toBeLessThan(45);
      console.warn('index1: ' + item1.index)

      expect(item2.text.length).toBeGreaterThan(0);
      expect(item2.text).toEqual(jasmine.anything());
      expect(item2.index).toBeGreaterThan(-1);
      expect(item2.index).toBeLessThan(45);
      console.warn('index2: ' + item2.index)
    });

  });
  describe('getAll()', function(){
  	it('should return list of all items', function(){
  		var traits = new UniqueTavernTraits();
  		var items = traits.getAll();
  		expect(items.length).toEqual(45);
  	});
  });
});