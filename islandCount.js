/*
Given a string representation of a 2d map, return the number of islands in the map. 
Land spaces are denoted by a zero, while water is denoted by a dot. Two land spaces are considered connected if they are adjacent (but not diagonal).
(!!!) NOTICE: Newline characters in the inputs have been replaced with <br /> tags to make the value easier to read. 
In other words, when you see a break, it's actually a \n
*/

function countIslands (mapStr) {
  let count = 0;
  let mapArray = [];
  mapStr.split('\n').forEach(function(row) {mapArray.push(row.split(''))});
  let height = mapArray.length;
  let width = mapArray[0].length;
  
  var recurse = function(row, column) {
    mapArray[row][column] = '.'
    if(column+1 < width && mapArray[row][column+1] === '0') {
      recurse(row, column + 1);
    }
    if(column-1 >= 0 && mapArray[row][column-1] === '0') {
      recurse(row, column - 1);
    }
    if(row-1 >= 0 && mapArray[row-1][column] === '0') {
      recurse(row-1, column);
    }
    if(row+1 < height && mapArray[row+1][column] === '0') {
      recurse(row+1, column);
    }
  };
  
  mapArray.forEach(function(row, i) {
    row.forEach(function(val, j) {
      if (val === '0') {
        count++;
        recurse(i,j);
      }
    })
  });
  return count;
}
