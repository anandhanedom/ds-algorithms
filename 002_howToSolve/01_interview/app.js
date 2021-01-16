// Given 2 arrays, create a function that
// let's user know (true/false) whether these 2 arrays contain any common items

// For example :
// const array1 = ['a', 'b', 'c', 'x'];
// const array2 = ['z', 'y', 'i'];
//should return false

// ___________________________________

// const array1 = ['a', 'b', 'c', 'x'];
// const array2 = ['z', 'y', 'x'];
//should return true

//***** ANSWER + APPROACH *****

//2 params - arrays - no size limit
//return true/false

//Brute force approach - O(a*b)

// function bruteFind(arr1, arr2) {
//   for (let i = 0; i < arr1.length; i++) {
//     for (let j = 0; j < arr2.length; j++) {
//       if (arr1[i] === arr2[j]) {
//         return true;
//       }
//     }
//   }
//   return false;
// } //Space complexity : O(1)

// console.log(bruteFind([1, 5, 10], [2, 6, 11]));
// console.log(bruteFind([1, 2, 10], [2, 6, 11]));

// const array1 = ['a', 'b', 'c', 'x'];
// const array2 = ['z', 'y', 'i', 'm'];
// array1 ==> obj{
//     a: true,
//     b: true,
//     c: true,
//     x: true,
// }
// array2[index] === obj.properties

function containsCommonItem(arr1, arr2) {
  // 1. Loop through first array and create obj where properties === items in the array.
  // can we assume always 2 params?

  const obj = {};

  for (let i = 0; i < arr1.length; i++) {
    if (!obj[arr1[i]]) {
      //   console.log(arr1[i]);
      obj[arr1[i]] = true;
    }
  }

  //Space complexity : O(a)

  //   console.log(obj);

  // 2. Loop through second array and check if item in the second array exists on created object.
  // O(a+b)

  for (let i = 0; i < arr2.length; i++) {
    if (obj[arr2[i]]) {
      return true;
    }
  }
  return false;
}

const array1 = ['a', 'a', 'c', 'x'];
const array2 = ['z', 'b', 'w'];

console.log(containsCommonItem(array1, array2));
