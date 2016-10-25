import { expect } from 'chai';

export function verifyGet(chart) {
    const items = chart.get();
    const item = items.results[0];
    expect(item.result).to.be.ok;
    expect(item.index).to.be.above(-1);
    return items;
}

export function verifyMultipleGet(chart, times) {
    const items = chart.get(times);
    expect(items.results.length).to.eql(times);
    items.results.forEach(function(item){
      expect(item.result).to.be.ok;
      expect(item.index).to.not.eql(-1);
    });
    return items;
}