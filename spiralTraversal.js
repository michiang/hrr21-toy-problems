/*
Write a function that accepts a 2-dimensional array (that is, an array containing many same-length arrays),
and prints out every value found, but in a spiral from the upper left in to the center.
*/

function spiralTraversal (matrix) {
  //O:Array with spiral of numbers
  //I:Matrix
  //C:Best case linear, worst case quadratic
  //E:Inner array just has one element
  //Use for loops to iterate over rows and push
  //the numbers according to the direction of the spiral

  var result = [];
  //Keep track of row index
  var startRow = 0;
  //Row ends pushing after second to last array
  var endRow = matrix.length-1;
  //Keep track of column index
  var startColumn = 0;
  //Indicative of end of pushing for each direction
  var endColumn = matrix[0].length-1;

  while (startColumn <= endColumn && startRow <= endRow) {
    //Iterate from beginning of first row to end of first row
    for (var i = startColumn; i <= endColumn; i++) {
      result.push(matrix[startRow][i]);
      //1, 2, 3
    }
    //Start on the next row
    startRow++;
    //1

    //Push the last numbers of the right wall of the matrix
    for (var i = startRow; i <= endRow; i++) {
      result.push(matrix[i][endColumn]);
      //6,9,8
    }
    endColumn--;
    //1

    if (startRow <= endRow) {
      //Push bottom wall of matrix by iterating backwards
      for (var i = endColumn; i >= startColumn; i--) {
        result.push(matrix[endRow][i]);
      }
      endRow--;
      //1
    }
    //Push left wall and inner row
    //startColumn 0, endColumn 1
    if (startColumn <= endColumn) {
      for (var i = endRow; i >= startRow; i--) {
        result.push(matrix[i][startColumn]);
      }
      startColumn++;
    }
  }
  return result;
}

/*
[1,2,3],
[4,5,6],
[7,8,9]

[1,2,3,4],
[5,6,7,8],
[9,10,11,12]

Entire first row always pushed out
Spiral always ends on second to first, second to last inner indices
*/
