function getRemainder(num1, num2) {
  let remainder = num1 > num2 ? (num1 % num2) : (num2 % num1);
  return remainder;
}

console.log(getRemainder(17, 5)); //=> 2
console.log(getRemainder(20, 5)); //=> 0
console.log(getRemainder(8, 22)); //=> 6
console.log(getRemainder(7, 42)); //=> 0
