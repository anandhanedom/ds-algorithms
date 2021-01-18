class HashTable {
  constructor(size) {
    this.data = new Array(size);
  }

  _hash(key) {
    // more like O(1)
    // pvt property

    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }

    return hash;
  }

  set(key, value) {
    // O(1)
    let address = this._hash(key);

    if (!this.data[address]) {
      this.data[address] = [];
    }

    this.data[address].push([key, value]);

    return this.data;
  }

  get(key) {
    // No collisions --> O(1)
    // Worst case    --> O(n)

    let address = this._hash(key);
    const currentBucket = this.data[address];

    // console.log('current', currentBucket);

    if (currentBucket) {
      for (let i = 0; i < currentBucket.length; i++) {
        if (currentBucket[i][0] === key) {
          return currentBucket[i][1];
        }
      }
    }

    return undefined;
  }

  keys() {
    const keys = [];

    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i]) {
        if (this.data[i].length > 1) {
          for (let j = 0; j < this.data[i].length; j++) {
            keys.push(this.data[i][j][0]);
          }
        } else {
          keys.push(this.data[i][0][0]);
        }
      }
    }

    return keys;
  }
}

const myHashTable = new HashTable(50);

myHashTable.set('apples', 54);
myHashTable.set('apples', 800); // Another chained key

myHashTable.set('grapes', 10000);
myHashTable.set('oranges', 2);

console.log(myHashTable.get('grapes'));
console.log(myHashTable.get('apples'));

console.log(myHashTable.keys());
