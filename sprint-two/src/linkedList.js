var LinkedList = function() {
  var list = {};
  // list.storage = {};
  list.head = null;
  list.tail = null;

  var example = {
    head: {
      value: 'value',
      next: {
        value: 'value 2',
        next: {
          value: 'value 3',
          next: null, //tail
        },
      }
    }
  };


  list.addToTail = function(value) {
    //if next is null, add node as the value of next key
    //initialize a new node
    var newNode = Node(value);

    if (!list.head) {
      list.head = newNode;
    }

    if (list.tail) {
      list.tail.next = newNode;
    }

    list.tail = newNode;
  };


  list.removeHead = function() {
    var removedHeadValue = list.head.value;
    list.head = list.head.next;
    return removedHeadValue;
  };

  list.contains = function(target) {
    var currentNode = list.head;
    while (currentNode) {
      if (currentNode.value === target) {
        return true;
      }
      currentNode = currentNode.next;
    }

    return false;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
