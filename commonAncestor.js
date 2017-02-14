//Implement the function getClosestCommonAncestor and getAncestorPath in the Tree class

// Valid Child
//var grandma = new Tree();
//var mom = new Tree();
//var uncle = new Tree();
//grandma.addChild(mom);
//grandma.addChild(uncle);
//var me = new Tree();
//mom.addChild(me);

//grandma.getAncestorPath(me); // => [grandma, mom, me]
//mom.getAncestorPath(me)  // => [mom, me]
//me.getAncestorPath(me) // => [me]
//grandma.getClosestCommonAncestor(me, uncle); // => grandma

// Invalid Child
//grandma.getAncestorPath(H R Giger) // => null
//var Tree = function(){
  //this.children = [];
//};

/**
  * add an immediate child
  */

Tree.prototype.addChild = function(child){
  if(!this.isDescendant(child)){
    this.children.push(child);
  }else {
    throw new Error("That child is already a child of this tree");
  }
  return this;
};

Tree.prototype.getClosestCommonAncestor = function(child1, child2){
  console.log(this);
  //Tree {
  //children: [ Tree { children: [Object] }, Tree { children: [] } ] }
  //Return the root tree when compared to the root tree
  if (child1 === child2) {
    return child1;
  }
  //If neither child is descendant, return null
  if(!this.isDescendant(child1) || !this.isDescendant(child2)){
    return null;
  }
  //If children are descendants, create paths for both of them
  let path1 = this.getAncestorPath(child1);
  //[grandma,mom,me]
  let path2 = this.getAncestorPath(child2);
  //[grandma, uncle]
  //Iterate starting from end of index to indicate bottom of tree
  for(let i = path1.length-1; i > -1; i--){
    //Iterate starting from end of index to indicate bottom of tree
    for(let j = path2.length-1; j > -1; j--){
      //Compare every individual to one another in each path
      //If match found, return the ancestor
      if(path2[j] === path1[i]){
        return path2[j];
      }
    }
  }
}

Tree.prototype.getAncestorPath = function(child){
  //Tree {
  //children: [ Tree { children: [Object] }, Tree { children: [] } ] }
  //If child is not a descendant of family tree, then return null
  if (!this.isDescendant(child)) {
    return null;
  } else {
    //Otherwise, loop through children
    for (let i = 0; i < this.children.length; i++){
      //If any children match input child
      if(this.children[i]===child){
        //Return path: root node and child in array
        return [this, this.children[i]];
      } else{
        //If none of the children match input child,
        //Check if the child is a descendant of the children of children
        if(this.children[i].isDescendant(child)){
          //Recursive call to further check if inner children match the child
          //Append the inner children to the root node to create a path 
          return [this].concat(this.children[i].getAncestorPath(child));
        }
      }
    }
  }
}

/**
  * check to see if the provided tree is already a child of this
  * tree __or any of its sub trees__
  */
Tree.prototype.isDescendant = function(child){
  if(this.children.indexOf(child) !== -1){
    // `child` is an immediate child of this tree
    return true;
  }else{
    for(var i = 0; i < this.children.length; i++){
      if(this.children[i].isDescendant(child)){
        // `child` is descendant of this tree
        return true;
      }
    }
    return false;
  }
};

/**
  * remove an immediate child
  */
Tree.prototype.removeChild = function(child){
  var index = this.children.indexOf(child);
  if(index !== -1){
    // remove the child
    this.children.splice(index,1);
  }else{
    throw new Error("That node is not an immediate child of this tree");
  }
};
/*
var grandma = new Tree();
var mom = new Tree();
var uncle = new Tree();
grandma.addChild(mom);
grandma.addChild(uncle);
var me = new Tree();
mom.addChild(me);

me.getAncestorPath(me) // => [me]
grandma.getClosestCommonAncestor(me, uncle); // => grandma
*/
