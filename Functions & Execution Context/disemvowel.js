// write a function disemvowel
// define vowels
// convert string to lowercase
// take string and check for vowels
// - return new string with vowels removed

// vowels
const VOWELS = ['a', 'e', 'i', 'o', 'u'];


function disemvowel(string) {

  let noVowelsStr = '';
  for (let i = 0; i < string.length; i++) {
    // getting a hold of each indiviual letter in string using its index
    let letter = string[i].toLowerCase();

    // checking if each letter is present in VOWELS const
    if (!VOWELS.includes(letter)) {
      // if a letter is NOT included in VOWELS const, concantate it to noVowelsStr
      noVowelsStr += string[i];
    }
  }
  return noVowelsStr;
}

console.log(disemvowel('ral'));

//Comment in the code below to test your function:

// console.log(disemvowel('CodeSmith')); // => 'CdSmth'
// console.log(disemvowel('BANANA')); // => 'BNN'
// console.log(disemvowel('hello world')); // => 'hll wrld'
