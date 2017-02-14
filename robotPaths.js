/*
A robot located at the top left corner of an n x n grid is trying to reach the bottom right corner. The robot can move either up, 
down, left, or right, but cannot visit the same spot twice. How many possible unique paths are there to the bottom right corner?
Make your solution work for a grid of any size.

Parameters:
n (required) - amount of rows/columns (max 6)

function makeBoard(n) {
  var board = [];
  for (var i = 0; i < n; i++) {
    board.push([]);
    for (var j = 0; j < n; j++) {
      board[i].push(false);
    }
  }
  board.togglePiece = function(i, j) {
    this[i][j] = !this[i][j];
  }
  board.hasBeenVisited = function(i, j) {
    return !!this[i][j];
  }
  return board;
}

*/

function robotPaths(n) {
  //Counter for number of paths found
  var count = 0;
  //Make grid of size n 
  var board = makeBoard(n);

  var searchForPaths = function(i, j) {
    //If path is found, increment count
    if (i === n - 1 && j === n - 1) {
      count++;
      return;
    }
    // If robot reaches edge of grid or current spot has already been
    // visited, return
    if (i < 0 || i >= n || j < 0 || j >= n || board.hasBeenVisited(i, j)) {
      return;
    } else {
      //Toggle piece to black out
      board.togglePiece(i, j);
      // Move right
      searchForPaths(i, j + 1);
      // Move down
      searchForPaths(i + 1, j);
      // Move left
      searchForPaths(i, j - 1);
      // Move up
      searchForPaths(i - 1, j);
      // Toggle piece to indicate parsable
      board.togglePiece(i, j);
    }
  };
  //Start recursive function at top left corner of the grid
  searchForPaths(0, 0);
  return count;
}
