const nemo = ['nemo'];

const everyone = [
  'victor',
  'bruce',
  'martin',
  'nemo',
  'jill',
  'brian',
  'nigella',
  'sam',
  'dorothy',
  'hussien',
];

const large = new Array(10000).fill('nemo');

const findNemo = (arr) => {
  //   let t0 = performance.now();

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 'nemo') {
      console.log('Found NEMO!');
    }
  }

  //   let t1 = performance.now();

  //   console.log(`Call to find Nemo took ${t1 - t0} milliseconds`);
};

// findNemo(nemo); - 0.... seconds
// findNemo(large); // O(n) --> linear time

const boxes = [0, 1, 2, 3, 4, 5];

function logFirstTwoBoxes(arr) {
  console.log(arr[0]); //O(1)
  console.log(arr[1]); //O(1)
}

logFirstTwoBoxes(boxes); //O(2)
