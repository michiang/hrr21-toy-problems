/*
Implement a linked-list
*/

var LinkedList = function (initialValue) {
  if (initialValue) {
    this.head = new Node(initialValue);
    this.tail = this.head;
  }https://challenge.makerpass.com/
};

LinkedList.prototype.addToTail = function (value) {
  var node = new Node(value);
  if (!this.head) {
    this.head = node;
    this.tail = this.head;
  } else {
    this.tail.next = node;
    this.tail = this.tail.next;
  }
};

LinkedList.prototype.removeHead = function () {
  if (this.head === this.tail) {
    this.head = null;
    this.tail = null;
  } else {
    this.head = this.head.next;
  }
};

LinkedList.prototype.contains = function (target) {
  var containsNode = this.head;
  while (containsNode) {
    if (containsNode.value === target) {
      return true
    }
    containsNode = containsNode.next;
  }
  return false;
};

var Node = function (val) {
  this.value = val;
  this.next = null;
};
