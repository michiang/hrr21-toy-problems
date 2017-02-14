/*
Given an array of unique words, find the word that contains the greatest number of other words. 
A word must be at least two letters long.
*/

const nestedWordCount = (wordList) => {
// O: string
// I: array of strings
// C: quadratic...
// E: input word must be at least two letters long
 let result = '';
 let maxCounter = 0;

 for (let i = 0; i < wordList.length; i++) {
   let currentCounter = 0;
   for (let j = 0; j < wordList.length; j++) {
     if (wordList[i].includes(wordList[j])) {
       currentCounter++;
       }
     }
    if (currentCounter > maxCounter) {
      maxCounter = currentCounter;
      result = wordList[i];
    }
 }
 return result;
}

// Keep a result
// Keep a counter
// Compare each letter in one word with each letter in another
//   Increment counter only if the entire word matches the
//   entire other word
//   whichever letter has the highest counter will be the word
//   that contains the greatest number of other words
