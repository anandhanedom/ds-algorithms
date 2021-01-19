// Google question
// Given an array = [2,5,1,2,3,5,1,2,4]
// It should return 2

// Given an array = [2,1,1,2,3,5,1,2,4]
// It should return 1

// Given an array = [2,3,4,5]
// It should return undefined

const arr1 = [2, 5, 1, 2, 3, 5, 1, 2, 4];
const arr2 = [1];

function firstRecurringCharacter1(arr) {
  //THIS IS WRONG!
  // O(n^2) --> time complexity
  // O(1) --> space complexity
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        return arr[i];
      }
    }
  }

  return undefined;
}

// console.log(firstRecurringCharacter1(arr2));

// Now with hash table
function firstRecurringCharacter2(arr) {
  //THIS IS CORRECT!
  // O(n) --> time complexity
  // O(n) --> space complexity
  let map = {};

  for (let i = 0; i < arr.length; i++) {
    if (map[arr[i]]) {
      return arr[i];
    } else {
      map[arr[i]] = true;
    }
    console.log(map);
  }

  return undefined;
}

console.log(firstRecurringCharacter2(arr1));
