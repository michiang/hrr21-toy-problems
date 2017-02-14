//Given a single input string, write a function that produces all possible anagrams of a string and outputs them as an array.
//At first, don’t worry about repeated strings. What time complexity is your solution?

const allAnagrams = (string) => {
  const result = [];
  const recursive = (anagram, str) => {
    if (anagram.length === string.length && result.indexOf(anagram) === -1) {
      result.push(anagram);
    }
    for (let i = 0; i < str.length; i++) {
      let buildAnagram = anagram + str[i];
      let restOfString = str.slice(0,i) + str.slice(i+1);
      recursive(buildAnagram, restOfString);
    }
  };
  recursive('', string);
  return result;
};

console.log(allAnagrams('apps'));

