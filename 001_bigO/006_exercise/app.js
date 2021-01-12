//Log all pairs of array
const boxes = ['a', 'b', 'c', 'd', 'e'];

const logPairs = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      console.log(arr[i], arr[j]);
    }
  }
};

logPairs(boxes); // O(n^2) --> quadratic time
