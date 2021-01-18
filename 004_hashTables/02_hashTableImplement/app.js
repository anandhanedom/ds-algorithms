class HashTable {
  constructor(size) {
    this.data = new Array(size); // [['grapes',10000],[..],[..],.....] - array of buckets
  }

  _hash(key) {
    // pvt property
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  }

  set(key, value) {
    const block = [key, this._hash(value)];
    this.data.push(block);
  }

  get(key) {
    for (let i = 0; i < this.data.length; i++) {
      // if (this.data[i][1] === key) {
      //   return data[i][1];
      // }

      console.log(this.data[i]);
    }
  }
}

const myHashTable = new HashTable(50);

myHashTable.set('grapes', 10000);
myHashTable.get('grapes');
