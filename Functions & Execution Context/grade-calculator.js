function gradeCalculator(grade) {
  if (!Number.isInteger(grade)) {
    return 'Please enter a valid number';
  }

  let result;

  if (grade >= 90) {
    result = 'A';
  } else if (grade >= 80 && grade < 90) {
    result = 'B';
  } else if (grade >= 70 && grade <= 79) {
    result = 'C';
  } else if (grade >= 60 && grade <= 69) {
    result = 'D';
  } else {
    result = 'F';
  }
  return result;
}

console.log(gradeCalculator(92)); //=> "A"
console.log(gradeCalculator(84)); //=> "B"
console.log(gradeCalculator(70)); //=> "C"
console.log(gradeCalculator(61)); //=> "D"
console.log(gradeCalculator(43)); //=> "F"
