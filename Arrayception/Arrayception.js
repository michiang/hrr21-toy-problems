//Given an array of arbitrarily nested arrays, return n, 
//where n is the deepest level that contains a non-array value.

function arrayception (array) {
  var deepest = 0;
  //counter of deepest level
  var current = 1;
  //counter to keep track of level of current nested array
  var recursive = function (innerValue) {
    //Iterate over the current array
    for (var i = 0; i < innerValue.length; i++) {
      //If the next value is a nested array
      if (Array.isArray(innerValue[i])) {
        //increment counter to indicate next level
        current++;
        //Send the next nested array back into recursive function
        recursive(innerValue[i]);
        current--;
      }
      else {
        //else if non-array value
        if (current > deepest) {
          //if current level of current nested array > deepest level
          deepest = current;
          //set deepest to current level
        }
      }
    }
    return deepest;
  }
  return recursive(array);
}


/*
O - an integer n, deepest level that contains a non-array value
I - array of arbitrarily nested arrays 
C - O(n * m), where m is the number of nested arrays and n is each level 
E - none
*/

