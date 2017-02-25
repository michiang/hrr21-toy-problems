//Write a function that accepts an array of integers and returns the largest product possible from three of those numbers.

const largestProductOfThree = (array) => {
  let largestIntegers;
  //If only 3 integers exist, multiply and return
  if (array.length === 3) {
    return (array[0] * array[1] * array[2]);
  }
  //Sort integers in ascending order
  let sortedArray = array.sort(function(a, b) {
    return a - b;
  });
  //Store the largest three numbers in an array
  largestIntegers = sortedArray.slice(Math.max(sortedArray.length - 3, 1));
  // Compare products to take care of negative integers edge case
  let negativeProduct = sortedArray[0] *  sortedArray[1] * largestIntegers[2];
  let positiveProduct = largestIntegers[0] * largestIntegers[1] * largestIntegers[2];
  if (negativeProduct > positiveProduct) {
    return negativeProduct;
  }
  return positiveProduct;
}
