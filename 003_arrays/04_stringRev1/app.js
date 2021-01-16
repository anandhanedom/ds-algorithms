//Create a function that reverses a string :

function reverse(str) {
  //Check length
  if (!str || str.length < 2 || typeof str !== 'string') {
    return 'Hmm..that is not good';
  }

  let revArray = [];

  for (let i = str.length - 1; i >= 0; i--) {
    revArray.push(str[i]);
  }

  return revArray.join('');
}

function reverse2(str) {
  //Check length
  if (!str || str.length < 2 || typeof str !== 'string') {
    return 'Hmm..that is not good';
  }

  return str.split('').reverse().join('');
}

const reverse3 = (str) => str.split('').reverse().join('');

const reverse4 = (str) => [...str].reverse().join('');

console.log(reverse('Malayalam'));
console.log(reverse2('Hilltop'));
console.log(reverse3('Zack'));
console.log(reverse4('Mountain'));
