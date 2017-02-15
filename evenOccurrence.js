/*
Find the first item that occurs an even number of times in an array. 
Remember to handle multiple even-occurrence items and return the first one. 
Return null if there are no even-occurrence items.
arr:
[ 1, 3, 3, 3, 2, 4, 4, 2, 5 ] =>	2
arr:
[ "cat", "dog", "dig", "cat" ] =>	"cat"
*/

const evenOccurrence = (arr) => {
  //Store each item and its frequency in an object
  let storage = {};
  for (let i = 0; i < arr.length; i++) {
    if (storage[arr[i]]) {
      storage[arr[i]]++;
    } else {
      storage[arr[i]] = 1;
    }
  }
  //Iterate through array and use object to find and return
  //first even occurrence of an item in the input array
  for (let j = 0; j < arr.length; j++) {
    if (storage[arr[j]] % 2 === 0) {
      return arr[j];
    }
  }
  //Return null if no even occurrence of an item is found
  return null;
}
