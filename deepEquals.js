/*
Write a function that, given two objects, returns whether or not the two are deeply equivalent–meaning 
the structure of the two objects is the same, and so is the structure of each of their corresponding descendants.

DO NOT use JSON.stringify.
*/

deepEquals = function(a, b) {
  //Use toString method to determine whether target is an object
  const checkObj = function(obj) {
    return Object.prototype.toString.call(obj) === '[object Object]';
  };
  
  //If key in a does not exist in b, then not deeply equal
  for (var key in a) {
    if (!b[key]) {
      return false;
    }
    //If both a and b are not objects and values null, then not deeply equal
    if (!checkObj(a[key]) && !checkObj(b[key]) && a[key] !== b[key]) {
      return false;
    }
    //If both a and b are objects, recursive case
    if (checkObj(a[key]) && checkObj(b[key])) {
      let recurse = deepEquals(a[key], b[key]);
      if (!recurse) {
        return false;
      }
    }
  }
   //If key in b does not exist in a, then not deeply equal
  for (var key in b) {
    if (!a[key]) {
      return false;
    }
    //If both a and b are not objects and values null, then not deeply equal
    if (!checkObj(a[key]) && !checkObj(b[key]) && a[key] !== b[key]) {
      return false;
    }
    //If both a and b are objects, recursive case
    if (checkObj(a[key]) && checkObj(b[key])) {
      let recurse = deepEquals(a[key], b[key]);
      if (!recurse) {
        return false;
      }
    }
  }
  //If passes all tests, then both objects are deeply equal
  return true;
};
