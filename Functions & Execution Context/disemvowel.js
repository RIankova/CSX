// write a function that takes in a string
// - check if string contains vowels
// - return new string without vowels

// define vowels
const VOWELS = ['a', 'e', 'i', 'o', 'u'];

// new string to hold string without vowels

function disemvowel(string) {
  // has to be declared in local memory so it's reset with each iteration
  let noVowelsStr = '';

  for (let i = 0; i < string.length; i++) {
    // convert string to lowercase to properly check againist VOWELS const
    let lowerCaseLetter = string[i].toLowerCase();
    // if a letter is NOT included in VOWELS const, concantate each letter to noVowelsStr
    if (!VOWELS.includes(lowerCaseLetter)) {
      noVowelsStr += string[i];
    }
  }
  return noVowelsStr;
}
// loop through string letters
console.log(disemvowel('ralitza'));


console.log(disemvowel('CodeSmith')); // => 'CdSmth'
console.log(disemvowel('BANANA')); // => 'BNN'
console.log(disemvowel('hello world')); // => 'hll wrld'
