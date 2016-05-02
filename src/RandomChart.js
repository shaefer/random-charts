function RandomChart(myItems) {
	var items = myItems;

	this.get = function(times) {
		if (!times)
			times = 1
		var selectedItems = [];
		for(var i = 0;i<times;i++) {
			var index = Math.floor(Math.random() * items.length)
			var item = items[index]
			selectedItems.push({index:index, text:item})
		}
		
		return selectedItems;
	}

	this.getAll = function() {
		return items;
	}
}

RandomChart.create = function(className, itemList) {
	window[className] = function() {
		RandomChart.call(this, items);
	}
	window[className].prototype = Object.create(RandomChart.prototype);
}