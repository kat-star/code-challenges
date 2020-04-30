// Given a sentence convert the sentence to the modified  pig-latin language: Words beginning with a vowel, remove the vowel letter and append the letter to the end. All words append the letters 'ni' to the end. All words incrementally append the letter 'j'. i.e. 'j','jj','jjj', etc..

function pigLatin(string) {
  const strArr = string.split(' '); 
  const vowels = {'a': 'a', 'e': 'e', 'i': 'i', 'o': 'o', 'u': 'u'}
  const result = [];

  strArr.forEach((word, i) => {
    let newWord = "";
    let firstChar = word[0].toLowerCase();
    if (vowels[firstChar] ) {
      newWord = word.slice(1) + word[0] + 'ni' + 'j'.repeat(i + 1)
    } else {
      newWord = word + 'ni' + 'j'.repeat(i + 1)
    }
    result.push(newWord);
  })
  return result.join(' ')
}

console.log(pigLatin('Today is my favorite day'))
console.log(pigLatin('Who let the dogs out?'))
console.log(pigLatin('Apple a day keeps the doctor away'))