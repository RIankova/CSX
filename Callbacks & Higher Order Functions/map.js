// create a function `subtractTwo` that accepts a number and returns that number minus 2
// - function(num) return num - 2;

// create a function `map` that takes two inputs
// 1) an array of numbers
// 2) a `callback` function - this function is applied to each element of the array (inside of the function `map`)

// have your `map` function return a new array filled with numbers that are the result of using the `callback` function on each element of the nput array

// higher-order function
function map(array, callback) {
  // create a new array
  let output = [];
  // iterate over input array
  for (let i = 0; i < array.length; i++) {
    // apply the callback and store result into the new array
    output.push(callback(array[i]));
  }
  return output;
}

// callback function
function subtractTwo(num) {
  // return result of num - two
  return num - 2;
}

console.log(map([1, 2, 3], subtractTwo)); // [ -1, 0, 1 ]

