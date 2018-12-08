// UNDERSTAND THE PROBLEM
// Write a function arrayBuilder
// - Takes in a count object and returns an array filled with the oppropriate numbers of elements

// -----

// REQUIREMENTS
// 1) The order of the elements in the array does not matter
// 2) Repeated elements should be grouped
// - {cats: 2, dogs: 1} => ['cats', 'cats', 'dogs']

// -----

// EXAMPLES / TEST CASES
// Input: {'cats': 2, 'dogs': 1}));
// Output: ['cats', 'cats', 'dogs']

// Input: arrayBuilder({}));
// Output: => []

// -----

// DATA STRUCTURE
// Input: Object
// Output: Array

// -----

// ALGORITHM
// 1) Declare a fuction with a parameter
// 2) Loop through Object property/value pairs
// 3) Store property into variable
// 4) Store value into variable to find out how many times a property should repeat
// 5) Declare an empty array
// 6) Assign result to empty array
// 7) Return array


function arrayBuilder(obj) {
  let objToArr = [];

  for (let [property, value] of Object.entries(obj)) {
    for (let i = 0; i < value; i++) {
      objToArr.push(property);
    }
  }
  return objToArr;
}

console.log(arrayBuilder({'cats': 2, 'dogs': 1})); //=> ['cats', 'cats', 'dogs']
console.log(arrayBuilder({})); //=> []
