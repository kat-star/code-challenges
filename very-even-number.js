// Write a function that returns true if the number is a "Very Even" number.
// If a number is a single digit, then it is simply "Very Even" if it itself is even.
// If it has 2 or more digits, it is "Very Even" if the sum of it's digits is "Very Even".

function isVeryEvenNumber(n) {
  if (n % 2 !== 0) {
    return false;
  }

  let arrayNum = n.toString().split("");
  let sum = arrayNum.reduce((memo, ele) => memo + parseInt(ele), 0);

  if (sum % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

console.log(isVeryEvenNumber(0)); // true
console.log(isVeryEvenNumber(12)); // false
console.log(isVeryEvenNumber(106)); // false
console.log(isVeryEvenNumber(222)); // true
console.log(isVeryEvenNumber(77778)); // true
