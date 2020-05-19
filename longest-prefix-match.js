// Longest Prefix Match
// determine the longest prefix match (in prefixes array) for each of the phone numbers (in numbers)
// OUTPUT: an array of prefixes (longest) that correspond  to the longest matches for each input number
// no prefix found? denote with "" empty string

function match(prefixes, numbers) {
  let longestPrefixMatches = [];
  // sorting prefixes by length since we will only do this once. Otherwise, we will have to loop through all of the prefixes for each number
  prefixes.sort((a, b) => b.length - a.length);
  
  for (let i = 0; i < numbers.length; i++) {
    let found;
    for (let j = 0; j < prefixes.length; j++) {
      let sliced = numbers[i].slice(0, prefixes[j].length);
      if (sliced === prefixes[j]) {
        longestPrefixMatches.push(prefixes[j]);
        found = true;
        break;
      }
    }
    if (!found) longestPrefixMatches.push(' ');
  }
  return longestPrefixMatches;
}


let prefixes = ['+1', '+1415123', '+1412', '+1510', '+44']
let numbers = ["+14151224983", "+14151234567", "+9900"]
console.log(match(prefixes, numbers)); // [ '+1', '+1415123', ' ']