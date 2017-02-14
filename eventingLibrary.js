//Make an eventing system mix-in that adds .trigger() and .on() to any input object.

//Example usage:
//var obj = mixEvents({ name: 'Alice', age: 30 });
//obj.on('ageChange', function(){ // On takes an event name and a callback function
  //console.log('Age changed');
//});
//obj.age++;
//obj.trigger('ageChange'); // This should call our callback! Should log 'age changed'.
/*
Caveats:
- mixEvents should return the original object it was passed after extending it.
- If we repeatedly call .on with the same event name, it should
continue to call the old function as well. That is to say, we can have multiple
listeners for an event.
- If obj.trigger is called with additional arguments, pass those to the
listeners.
- It is not necessary to write a way to remove listeners.
*/

var mixEvents = function(obj) {
  //Set events to be an object within obj input
  obj.events = {};
  obj.trigger = function (event) {
    //If obj.events does not have a defined event key
    //for particular trigger, then return null
    if (!obj.events[event]) {
      return null;
    }
    //If obj.trigger called with additional arguments, pass
    //those to the listeners
    var args = Array.prototype.slice.call(arguments, 1);
    //Iterate over every callback function in array
    for (var i = 0; i < obj.events[event].length; i++) {
      var cb = obj.events[event][i];
      //Invokes the callback function pertaining to 
      //the event with additional args arguments in context of obj
      cb.apply(obj, args);
    }
  };
  // Register a callback to be fired on this event.
  obj.on = function (event, callback) {
    //key: 'event', value: array containing callback
    //If 'on' invoked several times for one event 
    //obj.events[event] holds array containing callback from each 
    //'on' invocation
    if (!obj.events[event]) {
      obj.events[event] = [];
    }
    obj.events[event].push(callback);
  };
  return obj;
};
