// You are running a classroom and suspect that some of your students are passing around the answers to multiple choice questions disguised as random strings.

// Your task is to write a function that, given a list of words and a string, finds and returns the word in the list that is scrambled up inside the string, if any exists. There will be at most one matching word. The letters don't need to be contiguous.

// Example:
// words = ['cat', 'dog', 'bird', 'car', 'ax', 'baby']
// string1 = 'tcabnihjs'
// find_embedded_word(words, string1) -> cat

// string2 = 'tbcanihjs'
// find_embedded_word(words, string2) -> cat

// string3 = 'baykkjl'
// find_embedded_word(words, string3) -> None

// string4 = 'bbabylkkj'
// find_embedded_word(words, string4) -> baby

// n = number of words in `words`
// m = maximal string length of each word


const words = ["cat", "dog", "bird", "car", "ax", "baby"];
const string1 = "tcabnihjs";
const string2 = "tbcanihjs";
const string3 = "baykkjl";
const string4 = "bbabylkkj";

function find_embedded_word(words, string) {
  const wordsToObjects = []; 
  const stringToObject = wordToObject(string);

  for (let word of words) {
    wordsToObjects.push(wordToObject(word));
  }

  for (let i = 0; i < words.length; i++) {
    let characterNotMatched = false;
    for (let j = 0; j < words[i].length; j++) {
      const currChar = words[i][j];
      if (!stringToObject[currChar] || wordsToObjects[i][currChar] > stringToObject[currChar]) {
        characterNotMatched = true;
        break;
      }
    }
    if (!characterNotMatched) return words[i];
  }
  return "None";
}

function wordToObject(string) {
  return string.split("").reduce((acc, val) => {
    acc[val] ? (acc[val] += 1) : (acc[val] = 1);
    return acc;
  }, {});
}

console.log(find_embedded_word(words, string1)); // cat
console.log(find_embedded_word(words, string2)); // cat
console.log(find_embedded_word(words, string3)); // None
console.log(find_embedded_word(words, string4)); // baby
