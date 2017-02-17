/*
Write a function that accepts a number n and returns the number of iguana pairs after n months.
DO NOT use a recursive solution to this problem. Your solution must run in linear time.
Note: Your solution may fail if you have a comment in your nthFibonacci function that contains
the string literal “nthFibonacci” somewhere within it.
*/

nthFibonacci = function(n) {
  let prevPrevious = 0;
  let previous = 1;
  let result = 1;
  if (n === 0) {
    return 0;
  }
  if (n === 1) {
    return 1;
  }
    for (let i = 2; i <= n; i++) {
      result = prevPrevious + previous;
      prevPrevious = previous;
      previous = result;
    }
  return result;
};

