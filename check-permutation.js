// Check Permutation 
// input: 2 strings
// output: boolean determining if the strings are permutations of each other

// TIPS: Clarify with interviewer:
// - clarify meaning of permutation in the problem
// - since we're comparing whether 2 words are permutations of each other, they will have to have the same letters and word length
// - ask whether case sensitivity and white space matters 


function checkPermutation(str1, str2) {
  if (str1.length !== str2.length) return false;
  let charCountLookup = strCharCountObj(str1);

  for (let char of str2) {
    charCountLookup[char]--;
    if (charCountLookup[char] < 0) return false;
  }
  return Object.values(charCountLookup).every(val => val === 0);
  }

function strCharCountObj(str) {
  const lookup = {};

  for (let char of str) {
    lookup[char] ? (lookup[char] += 1) : (lookup[char] = 1);
  }
  return lookup;
}

console.log(checkPermutation("cast", "scat")); // true
console.log(checkPermutation("pie", "piazza")); // false
console.log(checkPermutation("darkland", "parkland")); // false
console.log(checkPermutation("mope", "poem")); // true                                                                     