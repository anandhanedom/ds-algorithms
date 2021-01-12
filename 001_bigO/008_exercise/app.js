function boo(n) {
  for (let i = 0; i < n.length; i++) {
    console.log('boo!');
  }
}

boo([1, 2, 3, 4, 5]);

// Time complexity : O(n)
// Space complexity : O(1)

function arrayOfHiNTimes(n) {
  let hiArray = [];

  for (let i = 0; i < n.length; i++) {
    hiArray[i] = 'hi';
  }

  console.log(hiArray);
}

arrayOfHiNTimes(6);
// Space complexity : O(n)
