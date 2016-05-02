describe('UniqueTavernTraits', function() {
  describe('get()', function(){
    it('should get a random item from the list', function() {
    	var traits = new UniqueTavernTraits();
    	var item = traits.get();
    	expect(item.text.length).toBeGreaterThan(0);
    	expect(item.text).toEqual(jasmine.anything());
        expect(item.index).toBeGreaterThan(-1);
        expect(item.index).toBeLessThan(45);
        console.warn('index: ' + item.index)
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