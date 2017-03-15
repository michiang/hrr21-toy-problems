/*
Write a function that rotates a NxN matrix 90 degrees clockwise.
A matrix, also called a 2-D array, is simply an array of arrays of values.

EXTRA CREDIT
- Make your function operate on rectangular matrices (MxN rather than NxN).
- Make your function accept a parameter for the direction of rotation (1 = clockwise, -1 = counterclockwise)
*/

function rotateMatrix(matrix) {
  var rotated = [];
  for (var i = 0; i < matrix.length; i++) {
    var array = [];
    for (var j = 0; j < matrix[i].length; j++) {
      //prepend first element of arrays in matrix
      array.unshift(matrix[j][i]);
    }
    rotated.push(array);
  }
  return rotated;
}
