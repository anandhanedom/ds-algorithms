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

console.log(reverse('Malayalam'));
