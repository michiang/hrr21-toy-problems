/*
Write a function that accepts two strings as arguments, and returns only the characters that are common to both strings.
Your function should return the common characters in the same order that they appear in the first argument. Do not return duplicate characters and ignore whitespace in your returned string.
Example: commonCharacters('acexivou', 'aegihobu')
Returns: 'aeiou'
*/

const commonCharacters = (string1, string2) => {
  let result = [];
  let array1 = string1.split('');
  let array2 = string2.split('');

  for (let i = 0; i < array1.length; i++) {
    if (array2.indexOf(array1[i]) !== -1 && result.indexOf(array1[i]) === -1 &&
      array1[i] !== ' ') {
      result.push(array1[i]);
    }
  }
  return result.join('') || '';
}
