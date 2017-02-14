/*
Define a resize function in the following hash table implementation.
*/

var makeHashTable = function(){
  var result = {};
  var storage = [];
  var storageLimit = 4;
  var size = 0;
  var resizing = false;

  function resize(newSize){
    //Set new storage limit to new size of hash table
    storageLimit = newSize;
    //create a new storage array 
    const newStorage = [];
    //iterate over current storage array 
    storage.forEach(bucket => {
      //iterate over each bucket 
      bucket.forEach(pair => {
        //Rehash all key value pairs 
        let index = getIndexBelowMaxForKey(pair[0], storageLimit);
        newStorage[index] = newStorage[index] || [];
        //Push into new storage array 
        newStorage[index].push([pair[0], pair[1]]);
      });
    });
    //set old storage array as the new storage array 
    storage = newStorage;
  } 
  
  result.insert = function(key, value){
    var index = getIndexBelowMaxForKey(key, storageLimit);
    storage[index] = storage[index] || [];
    var pairs = storage[index];
    var pair;
    var replaced = false;
    for (var i = 0; i < pairs.length; i++) {
      pair = pairs[i];
      if (pair[0] === key) {
        pair[1] = value;
        replaced = true;
      }
    }

    if (!replaced) {
      pairs.push([key, value]);
      size++;
    }
    if(size >= storageLimit * 0.75){
      // increase the size of the hash table
      resize(storageLimit * 2);
    }
  };

  result.retrieve = function(key){
    var index = getIndexBelowMaxForKey(key, storageLimit);
    var pairs = storage[index];
    if (!pairs) { return; }
    var pair;

    for (var i = 0; i < pairs.length; i++) {
      pair = pairs[i];
      if (pair && pair[0] === key) {
        return pair[1];
      }
    }
  };

  result.remove = function(key){

    var index = getIndexBelowMaxForKey(key, storageLimit);
    var pairs = storage[index];
    var pair;

    for (var i = 0; i < pairs.length; i++) {
      pair = pairs[i];
      if (pair[0] === key) {
        var value = pair[1];
        delete pairs[i];
        size--;
        if(size <= storageLimit * 0.25){
          // decrease the size of the hash table
          resize(storageLimit / 2);
        }
        return value;
      }
    }
  };
  
  //This next function you would never have for a hash table
  //It is here merely for testing purposes. So we can check that 
  //you are resizing correctly
  result.find = function(index){
    //return the bucket at a given index
    return storage[index];
  };

  return result;
};

// This is a "hashing function". You don't need to worry about it, just use it
// to turn any string into an integer that is well-distributed between
// 0 and max - 1
var getIndexBelowMaxForKey = function(str, max){
  var hash = 0;
  for (var i = 0; i < str.length; i++) {
    hash = (hash<<5) + hash + str.charCodeAt(i);
    hash = hash & hash; // Convert to 32bit integer
    hash = Math.abs(hash);
  }
  return hash % max;
};
