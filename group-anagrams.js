// Leetcode 49. Group Anagrams

// Given an array of strings, group anagrams together.

// Example:
// Input: ["eat", "tea", "tan", "ate", "nat", "bat"],
// Output:
// [["ate", "eat", "tea"], ["nat", "tan"], ["bat"]]

// Note:
// All inputs will be in lowercase.
// The order of your output does not matter.

var groupAnagrams = function (strs) {
  let lookup = {};

  strs.forEach(str => {
    let s = str.split('').sort().join('');
    if (lookup[s]) {
      lookup[s].push(str);
    } else {
      lookup[s] = [str];
    }
  })
  return Object.values(lookup)
}

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]))