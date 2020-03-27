// Codewars Consonant Value

// Given a lowercase string that has alphabetic characters only and no spaces, return the highest value of consonant substrings.Consonants are any letters of the alphabet except "aeiou".

// We shall assign the following values: a = 1, b = 2, c = 3, ....z = 26.

// For example, for the word "zodiacs", let's cross out the vowels. We get: "z o d ia cs"

// --The consonant substrings are: "z", "d" and "cs" and the values are z = 26, d = 4 and cs = 3 + 19 = 22. The highest is 26.
// solve("zodiacs") = 26

// For the word "strength", solve("strength") = 57

function solve(s) {
  let alpha = 'abcdefghijklmnopqrstuvwxyz';
  let currentVal = -Infinity;
  let maxVal = -Infinity;

  for (let i = 0; i < s.length; i++) {
    if (/[aeiou]/i.test(s[i])) {
      currentVal = -Infinity;
      continue;
    } else {
      currentVal = Math.max(alpha.indexOf(s[i]) + 1, currentVal + (alpha.indexOf(s[i]) + 1));
      maxVal = Math.max(maxVal, currentVal);
    }
  }
  return maxVal;
};

console.log(solve('zodiacs')) // 26
console.log(solve('strength')) // 57