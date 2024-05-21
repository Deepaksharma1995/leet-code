/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
  this.stack = new Map();
  this.capacity = capacity;
};

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
  let value;
  if (this.stack.has(key)) {
    value = this.stack.get(key);
    for (let curKey of this.stack.keys()) {
      if (curKey === key) {
        map.delete(curKey);
        break;
      }
    }
    this.stack.set(key, value);
  } else return -1;
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
  if (this.stack.has(key)) {
    for (let curKey of this.stack.keys()) {
      if (curKey === key) {
        map.delete(curKey);
        break;
      }
    }
    this.stack.set(key, value);
  } else if (this.stack.size < this.capacity) {
    this.stack.set(key, value);
  } else {
    let keysIterator = this.stack.keys();
    let firstKey = keysIterator.next().value;
    this.stack.delete(firstKey);
    this.stack.set(key, value);
  }

  console.log(this.stack);
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
const lRUCache = new LRUCache(2);
lRUCache.put(1, 1); // cache is {1=1}
lRUCache.put(2, 2); // cache is {1=1, 2=2}
lRUCache.get(1); // return 1
lRUCache.put(3, 3); // LRU key was 2, evicts key 2, cache is {1=1, 3=3}
lRUCache.get(2); // returns -1 (not found)
lRUCache.put(4, 4); // LRU key was 1, evicts key 1, cache is {4=4, 3=3}
lRUCache.get(1); // return -1 (not found)
lRUCache.get(3); // return 3
lRUCache.get(4); // return 4
