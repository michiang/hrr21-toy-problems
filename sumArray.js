function sumArray(array){
  var maxSum = Number.NEGATIVE_INFINITY;
  var current = 0;
  for (var i = 0; i < array.length; i++) {
    current = current + array[i];
    maxSum = Math.max(maxSum, current);
    if (current < 0) {
      current = 0;
    }
  }
  return maxSum;
};

//O: Integer
//I: Array of integers
//C: none
//E: empty array

//Keep in mind, continguous meaning the integers must be adjacent for sum
