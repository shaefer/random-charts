describe('UniqueTavernTraits', function() {
  it('should return same result', function() {
    var chart = new UniqueTavernTraits();
    RandomChartSpec.verifyGet(chart);
    RandomChartSpec.verifyMultipleGet(chart, 3);
    expect(chart.items.length).to.eql(45);
  });
});