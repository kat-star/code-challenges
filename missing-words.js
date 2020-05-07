// Missing Words
// Given two strings, one is a subsequence if all of the elements of the first string occur in the same order within the second string.They do not have to be contiguous in the second string, but order must be maintained.
// For example, given the string 'I like cheese', the words('I', 'cheese') are one possible subsequence of that string. 
// Words are space delimited.

// Given two strings, s and t, where t is a subsequence of s, report the words of s, missing in t(case sensitive), in the order they are missing.

// take two-pointer approach
function missingWords(s, t) {
  const missingWords = [];
  const sWords = s.split(' ');
  const tWords = t.split(' ');

  let i = 0;
  let j = 0;
  while (i < sWords.length) {
    if (sWords[i] !== tWords[j]) {
      missingWords.push(sWords[i]);
    } else {
      j++;
    }
    i++;
  }
  return missingWords;
}

console.log(missingWords('I am using HackerRank to improve programming', 'am HackerRank to improve'));
// ['I', 'using', 'programming']
console.log(missingWords('I like cheese', 'like')); // ['I', 'cheese']
console.log(missingWords('My favorite programming languages are Ruby and JavaScript Although there are a lot of programming languages to learn like Python but I do like JavaScript', 'JavaScript programming for the last like')); // [ 'My', 'favorite', 'programming', 'languages', 'are',  'Ruby',   'and', 'Although', 'there', 'are', 'a', 'lot', 'of', 'languages', 'to', 'learn', 'like', 'Python', 'but', 'I', 'do', 'like', 'JavaScript' ]