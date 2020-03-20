// Leetcode 3. Longest Substring Without Repeating Characters

// Given a string, find the length of the longest substring without repeating characters.

// Input: "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.
// Example 2:

const lengthOfLongestSubstring = function (s) {
  if (s.length === 0) return 0;

  let maxLength = 1;
  let currentLength = 1;
  let visited = new Set();

  for (let i = 0; i < s.length; i++) {
    visited.add(s[i]);
    for (let j = i + 1; j < s.length; j++) {
      if (!visited.has(s[j])) {
        visited.add(s[j]);
        currentLength += 1;
        maxLength = Math.max(maxLength, currentLength);
      } else {
        currentLength = 1;
        visited.clear();
        break;
      }
    }
  }
  return maxLength;
};

console.log(lengthOfLongestSubstring('bbbbb')) // 1
console.log(lengthOfLongestSubstring('pwwkew')) // 3
console.log(lengthOfLongestSubstring('abcabcbb')) // 3