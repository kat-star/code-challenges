//LeetCode 819. Most Common Word

// Given a paragraph and a list of banned words, return the most frequent word that is not in the list of banned words. It is guaranteed there is at least one word that isn't banned, and that the answer is unique.

// Words in the list of banned words are given in lowercase, and free of punctuation.Words in the paragraph are not case sensitive.The answer is in lowercase.

//Input: 
// paragraph = "Bob hit a ball, the hit BALL flew far after it was hit."
// banned = ["hit"]
// Output: "ball"
// Explanation:
// "hit" occurs 3 times, but it is a banned word.
// "ball" occurs twice(and no other word does), so it is the most frequent non - banned word in the paragraph.
// Note that words in the paragraph are not case sensitive, that punctuation is ignored(even if adjacent to words, such as "ball,"), and that "hit" isn't the answer even though it occurs more because it is banned.

//My updated solution with banned words as object lookup and checking the word frequency at the same time in the loop versus looping through checked words separetely at end

function mostCommonWord(paragraph, banned) {
  let parArr = paragraph.toLowerCase().split(/\W+/);
  let banLookup = {};
  let checkedWords = {};
  let mostFreqWord;
  let mostNumOfWords = 0;

  banned.forEach(word => banLookup[word] = word);

  parArr.forEach(word => {
    if (!banLookup[word]) {
      if (checkedWords[word]) {
        checkedWords[word] += 1;
        if (checkedWords[word] > mostNumOfWords) {
          mostFreqWord = word;
          mostNumOfWords = checkedWords[word];
        }
      } else {
        checkedWords[word] = 1;
      }
    }
  })
  return mostFreqWord
}

console.log(mostCommonWord("Bob hit a ball, the hit BALL flew far after it was hit.", ["hit"])) // --> 'ball'
console.log(mostCommonWord("Today is another day and tomorrow is also another day with today in the rearview mirror and a day again", ["is", "mirror"])) //another or today
