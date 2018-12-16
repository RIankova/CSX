// reduce() examples:
// let arr = [1, 2, 3];

// let total = arr.reduce(function(total, num) {
//   // total is the accumulator
//   // -> it keeps track of the outcome of each loop
//   return total + num;
// }, 0);

// console.log(total); // -> 6

// // using ES6 arrow function syntax
// // arr.reduce((total, num) => total + num, 0)

// var nums = [4, 1, 3];

// console.log(sum);
// // the 'reduce' function loops through the array and applies any operation that you can put into a function to each element in the array while keeping track of the outcome of each loop. In this way, we could use 'reduce' to do things like sum all the numbers in an array or multiply them all together

// input: arr, callback, initial value
// output: single value

// my attempt
function reduce(arr, callback, initialValue) {
  // ensure argument is an array
  if (Array.isArray(arr)) {
    // assign accumulator to initialValue or assign to 0 if undefined
    let total = initialValue || 0;
    // iterate over array and run callback while passing in the accumulator value and the current array element
    for (let i = 0; i < arr.length; i++) {
      // assign accumulator to the callback's return value
      total = callback(total, arr[i]);
    }
    return total;
  }
  return 'Please enter an array';
}

function multiplyBy2(total, number) {
  return total * number;
}

console.log(reduce('[1, 2, 3]', multiplyBy2, 2)); // -> 12

//---------------

// solution video

function reduce2(array, callback, initial) {
  if (Array.isArray(array)) {
    let acc;
    if (initial === undefined) {
      acc = array[0];
      array = array.slice(1);
    } else {
      acc = initial;
    }
    array.forEach(function (element) {
      acc = callback(acc, element);
    });
    return acc;
  }
  return 'The first argument should be an array';
}

console.log(reduce2('3', function (total, number) { return total * number;}, 2)); // -> 12
