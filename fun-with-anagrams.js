// Fun With Anagrams

// iterate through array to check if words are anagrams 
// if anagram, keep the first instance and remove the second
// if not an anagram, word stays in array
// return an array with words sorted



// Initial solution: using [] lookup and using includes()

// function funWithAnagrams(text) {
//   let words = [];
//   let wordsChecked = [];

//   for (let i = 0; i < text.length; i++) {
//     let sortWord = text[i].split('').sort().join('');
//     if (!wordsChecked.includes(sortWord)) {
//       wordsChecked.push(sortWord);
//       words.push(text[i])
//     } 
//   }

//   return words.sort();
// }


function funWithAnagrams(text) {
  let words = [];
  let wordsChecked = [];

  for (let i = 0; i < text.length; i++) {
    let matchFound = false;
    let objectWord = wordToObject(text[i]);
    for (let i = 0; i < wordsChecked.length; i++) {
      if (compareObjects(objectWord, wordsChecked[i])) {
        matchFound = true;
        break;
      }
    }
    if (!matchFound) {
      wordsChecked.push(objectWord);
      words.push(text[i]);
    }
  }
  return words.sort();
}

function wordToObject(word) {
  let wordObj = {};

  for (let i = 0; i < word.length; i++) {
    if (wordObj[word[i]]) {
      wordObj[word[i]] += 1;
    } else {
      wordObj[word[i]] = 1;
    }
  }
  return wordObj;
}

function compareObjects(obj1, obj2) {
  if (Object.keys(obj1).length !== Object.keys(obj2).length) return false;

  for (let key in obj1) {
    if (obj1[key] !== obj2[key]) return false;
  }
  return true;
}

console.log(funWithAnagrams(['code', 'doce', 'ecod', 'framer', 'frame'])); // [ 'code', 'frame', 'framer' ]
console.log(funWithAnagrams(['poke', 'pkoe', 'okpe', 'ekop'])); // [ 'poke' ]