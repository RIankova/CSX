// create a function forEach
  // takes an array and a callback
function forEach(array, callback) {
  // runs the callback on each element of the array
  for (let i = 0; i < array.length; i++) {
    // i -> index
    // callback takes three arguments -> current value, the index, and the array
    callback(array[i], i, array);
  }
  // forEach does NOT return anything - forEach returns undefined
}

function subtractTwo(num) {
  return num - 2;
}

function map(array, callback) {
  let output = [];
  forEach(array, function(element) {
    let result = callback(element);
    output.push(result);
  });
  return output;
}

console.log(typeof forEach); // should log: 'function'
forEach(['a','b','c'], i => console.log(i)); // should log: 'a', 'b', 'c'
console.log(typeof map); // should log: 'function'
console.log(map([3, 4, 5], subtractTwo)); // should log: [1, 2, 3]
console.log(map([3,4,5], n => n - 2)); // should log: [1, 2, 3]
