const strings = ['a', 'b', 'c', 'd']; //4*4 = 16bytes

//Access
console.log(strings[1]); //O(1)

// PUSH
strings.push('e'); //O(1) , can be O(n) (dynamic arrays)

// POP
strings.pop(); //O(1)

// Add at the beginning - unshift
strings.unshift('x'); //O(n)

//Splice
strings.splice(strings.length / 2, 0, 'alien'); //O(n)

console.log(strings);
