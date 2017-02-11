//Implement the function ‘bind’, which accepts a function and a context as arguments. The context 
//argument should override an existing context that the function is defined in. 
//Your bind function should return the passed in function.
//DO NOT use the native bind() function in your solutions. You may use the functions call() and apply().


var bind = function(func, context){
  //Get copy of array of arguments except for func and context 
  //Must use slice.call on arguments since arguments is an array-like object
  //without any array methods on its prototype
  var args = Array.prototype.slice.call(arguments,2)
  return function(){
    //use apply to return a function definition, when invoked calls a function with 
    //the context of context
    //applying the entire arguments will allow us to bind context to context 
    return func.apply(context, args.concat(Array.prototype.slice.call(arguments)));
  }
}; 

Function.prototype.bind = function(context) {
  var args = Array.prototype.slice.call(arguments,1) 
  var func = this;
  return function(){
    return func.apply(context, args.concat(Array.prototype.slice.call(arguments)));
  }
};
