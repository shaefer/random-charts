module.exports = class SimpleRandomItemSelection {
  getItem(items, random) {
    var index = Math.floor(random() * items.length);
    var item = items[index];
    return {index:index, item:item};
  }
};