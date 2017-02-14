/*
Finish this implementation of a Hash Table. It should have the methods insert(), retrieve(), and remove().
Your hash table need not resize itself, but shall handle collisions. 
*/

var makeHashTable = function(){
  var table = {};
  var storage = [];
  var storageLimit = 1000;
  
  table.insert = function(key, value){
  //Put key through hash function to get unique index
  var index = getIndexBelowMaxForKey(key, storageLimit);
  //storage[index] is bucket 
  storage[index] = storage[index] || [];
  //Remove existing key 
  this.remove(key);
  //Push array of key and value pair to bucket
  storage[index].push([key,value]);
  };
    
 //Given a key, retrieve its corresponding value 
 table.retrieve = function(key){
 //Put key through hash function to get unique index
 var index = getIndexBelowMaxForKey(key, storageLimit);
 //If bucket exists
   if (storage[index]) {
    //Iterate over bucket
     for (var i = 0; i < storage[index].length; i++) {
      //If any keys in the bucket match input key
       if (storage[index][i][0] === key) {
         //Return that key's corresponding value from bucket
         return storage[index][i][1];
       }
     }
   }
 };
    
 //Given a key, remove its corresponding value
 table.remove = function(key){
 //Put key through hash function to get unique index
 var index = getIndexBelowMaxForKey(key, storageLimit);
   //If bucket exists
   if (storage[index]) {
     //Iterate over bucket 
     for (var i = 0; i < storage[index].length; i++) {
       //If any keys match input key
       if (storage[index][i][0] === key) {
         //Splice the key value pair from the bucket
         storage[index].splice(i, 1);
       }
     }
   }
 }
 return table;  
};

 var getIndexBelowMaxForKey = function(str, max){
   var hash = 0;
   for (var i = 0; i < str.length; i++) {
     hash = (hash<<5) + hash + str.charCodeAt(i);
     hash = hash & hash; // Convert to 32bit integer
     hash = Math.abs(hash);
   }
   return hash % max;
 };
