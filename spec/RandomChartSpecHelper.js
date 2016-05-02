function RandomChartSpec() {}

RandomChartSpec.verify = function(chart, amount) {
  describe('get()', function(){
    it('should get a random item from the list', function() {
        RandomChartSpec.verifyGet(chart, amount);
    });
    it('should get multiple random items from the list', function() {
        RandomChartSpec.verifyMultipleGet(chart, amount);
    });
  });
  describe('getAll()', function(){
    it('should return list of all items', function(){
        RandomChartSpec.verifyGetAll(chart, amount);
    });
  });
}

RandomChartSpec.verifyGet = function(chart, amount) {
    var items = chart.get();
    var item = items[0];
    expect(item.text.length).toBeGreaterThan(0);
    expect(item.text).toEqual(jasmine.anything());
    expect(item.index).toBeGreaterThan(-1);
    expect(item.index).toBeLessThan(amount);
    console.warn('index: ' + item.index)
}

RandomChartSpec.verifyMultipleGet = function(chart, amount) {
    var items = chart.get(2);
    var item1 = items[0];
    var item2 = items[1];
    expect(items.length).toEqual(2);
    expect(item1.text.length).toBeGreaterThan(0);
    expect(item1.text).toEqual(jasmine.anything());
    expect(item1.index).toBeGreaterThan(-1);
    expect(item1.index).toBeLessThan(amount);
    console.warn('index1: ' + item1.index)
    expect(item2.text.length).toBeGreaterThan(0);
    expect(item2.text).toEqual(jasmine.anything());
    expect(item2.index).toBeGreaterThan(-1);
    expect(item2.index).toBeLessThan(amount);
    console.warn('index2: ' + item2.index)
}

RandomChartSpec.verifyGetAll = function(chart, amount) {
    var items = chart.getAll();
    expect(items.length).toEqual(amount);
}