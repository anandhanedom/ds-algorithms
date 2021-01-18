let user = {
  age: 60,
  name: 'Victor',
  magic: true,
  scream: function () {
    console.log('ahhhh!');
  },
};

console.log(user.age); // O(1)
user.spell = 'Abra kadabra'; // O(1)
user.scream(); // O(1)

// HASH COLLISION
// O(n/k) => O(n) where k is the size of the hash table

// Collision resolution :
// 1. Separate chaining
// 2. Open addressing
// 3. Robinhood hashing

// Takeaway:
// 1. Insert 0(1)
// 2. Lookup O(1) ........ may take O(n) depending upon collision
// 3. Delete O(1)
// 4. Search O(1)

console.log(user);
