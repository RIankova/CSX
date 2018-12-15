// create a function called `pluralize` that takes an array of strings as input and returns a new array with an "s" added to the end of each string in th einput array
// carrot --> carrots

// body of `pluralize` should employ a single for loop that pluralizes each string in the input array

function pluralize(array) {
  let pluralString = [];

  for (let i = 0; i < array.length; i++) {
    pluralString.push(`${array[i]}s`);
  }
  return pluralString;
}

let array = ['apple', 'pear'];
let result = pluralize(array);
console.log(result); // apples
