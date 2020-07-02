// Leetocde 146. LRU Cache

// Design and implement a data structure for Least Recently Used (LRU) cache. It should support the following operations: get and put.

// get(key) - Get the value (will always be positive) of the key if the key exists in the cache, otherwise return -1.
// put(key, value) - Set or insert the value if the key is not already present. When the cache reached its capacity, it should invalidate the least recently used item before inserting a new item.

// The cache is initialized with a positive capacity.

class LRUCache {
  constructor(capacity) {
    this.DLL = new DoublyLinkedList();
    this.items = {};
    this.capacity = capacity;
  }

  // method returns the key's value if the key exists in the cache, else returns -1
  get(key) {
    if (!this.items[key]) return -1;
    const value = this.items[key].val;
    this.DLL.remove(this.items[key]);
    this.items[key] = this.DLL.insert(key, value);
    return value;
  }

  // method sets or inserts the value if the key is not already present
  // when capacity is reached, invalidate the LRU item before inserting a new item
  put(key, value) {
    if (this.items[key]) this.DLL.remove(this.items[key]);
    if (this.DLL.length === this.capacity) {
      const currKey = this.DLL.tail.key;
      delete this.items[currKey];
      this.DLL.remove(this.DLL.tail);
    }
    this.items[key] = this.DLL.insert(key, value);
  }
}

class Node {
  constructor(key, val) {
    this.key = key;
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  // inserting at head into DLL
  insert(key, val) {
    const newNode = new Node(key, val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return newNode;
  }

  remove(node) {
    // if only 1 node
    if (!node.next && !node.prev) {
      this.head = null;
      this.tail = null;
      // if node is tail node
    } else if (!node.next) {
      this.tail = node.prev;
      this.tail.next = null;
      // if node is head node
    } else if (!node.prev) {
      this.head = node.next;
      this.head.prev = null;
      // if node falls somewhere in between
    } else {
      const prev = node.prev;
      const next = node.next;
      prev.next = next;
      next.prev = prev;
    }
    this.length--;
  }
}

// using the LRUCache Class
const myCache = new LRUCache(2);
myCache.put(1, 10);
myCache.put(2, 20);
myCache.put(3, 30);
console.log(myCache.get(1)); // -1
console.log(myCache);
// LRUCache {
//   DLL: DoublyLinkedList {
//     head: Node { key: 3, val: 30, next: [Node], prev: null },
//     tail: Node { key: 2, val: 20, next: null, prev: [Node] },
//     length: 2
//   },
//   items: {
//     '2': Node { key: 2, val: 20, next: null, prev: [Node] },
//     '3': Node { key: 3, val: 30, next: [Node], prev: null }
//   },
//   capacity: 2
// }
