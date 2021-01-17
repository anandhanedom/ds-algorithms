const mergeSortedArrays = (array1, array2) => {
  const mergedArray = [];

  let array1Item = array1[0];
  let array2Item = array2[0];

  let i = 1,
    j = 1;

  //Check the inputs
  if (!Array.isArray(array1) || !Array.isArray(array2)) {
    return 'Hmm....check the inputs!!';
  } else if (array1.length === 0) {
    return array2;
  } else if (array2.length === 0) {
    return array1;
  }

  while (array1Item || array2Item) {
    // console.log(array1Item, array2Item);

    if (!array2Item || array1Item < array2Item) {
      mergedArray.push(array1Item);
      array1Item = array1[i];
      i++;
    } else {
      mergedArray.push(array2Item);
      array2Item = array2[j];
      j++;
    }
  }

  return mergedArray;
};

const arr1 = [0, 3, 4, 31];
const arr2 = [4, 6, 30];

console.log(mergeSortedArrays([0, 3, 4, 31], [4, 6, 30]));
