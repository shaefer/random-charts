describe('TavernMenuItems', function() {
  it('should return same result', function() {
    var chart = new TavernMenuItems();
    RandomChartSpec.verifyGet(chart);
    RandomChartSpec.verifyMultipleGet(chart, 3);
    expect(chart.items.length).to.eql(50);
  });
});