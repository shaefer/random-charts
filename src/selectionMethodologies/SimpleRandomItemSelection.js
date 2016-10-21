export default class SimpleRandomItemSelection {
  getItem(items, random) {
    const index = Math.floor(random() * items.length);
    const item = items[index];
    return {index:index, item:item};
  }
};