var expect = require('chai').expect;

function verifyGet(chart) {
    var items = chart.get();
    var item = items[0];
    expect(item.item).to.be.ok;
    expect(item.index).to.be.above(-1);
    return item;
}

function verifyMultipleGet(chart, times) {
    var items = chart.get(times);
    expect(items.length).to.eql(times);
    items.forEach(function(item){
      expect(item.item).to.be.ok;
      expect(item.index).to.not.eql(-1);
    });
    return items;
}

module.exports = {
    verifyGet,
    verifyMultipleGet
};