/*
Write a function that returns true if a linked list contains a cycle, or false if it terminates somewhere.

Explanation:

Generally, we assume that a linked list will terminate in a null next pointer, as follows:

 A -> B -> C -> D -> E -> null
A ‘cycle’ in a linked list is when traversing the list would result in visiting the same nodes over and over.

This is caused by pointing a node in the list to another node that already appeared earlier in the list. Example:

 A -> B -> C
      ^    |
      |    v
      E <- D
'Constraint 1: Do this in linear time'

'Constraint 2: Do this in constant space'

'Constraint 3: Do not mutate the original nodes in any way'

Helpers:
function Node (val) {
  var obj = {};
  obj.value = val || null;
  obj.next = null;
  return obj;
}

*/

const hasCycle = (linkedList) => {
  //Every node has a head and next property 
  //I: Linked list
  //O: Boolean
  //C: Linear time, constant space, do not mutate original nodes
  let currentNode = linkedList;
  let nextNode = linkedList;
  
  //if either node is ever null, then return false
  while (nextNode !== null && nextNode.next !== null) {
    //If the two nodes ever intersect, then a cycle exists
    currentNode = currentNode.next;
    nextNode = nextNode.next.next;
    if (currentNode === nextNode) {
      return true;
    }
  }
  return false;
};
