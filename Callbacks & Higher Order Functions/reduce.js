// the function `reduce` takes an array and reduces the elements to a single value
// the `reduce` function loops through the array and applies any operation that you can put into a function to each element in the array while keeping track of the outcome of each loop.
  // in this way, we could use `reduce` to do things like sum all the numbers in an array or multiply them all together
  /*
  var nums = [4, 1, 3];
  var add = function(a, b) {return a + b}
  reduce(nums, add, 0) // -> 8
  */

// define a 'reduce' function that accepts:
  // an array
  // a callback
  // an initial value and returns a single value

function reduce(array, callback, initialValue) {
  let sum = initialValue;
  for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
  }

}

function add(num) {
  return num + num;
}

var nums = [4, 1, 3];
console.log(reduce(nums, add, 0)); // should log 8
