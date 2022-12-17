var BinarySearchTree = function(value) {
  var binaryTree = {};

  binaryTree.value = value;
  binaryTree.left = null;
  binaryTree.right = null;

  _.extend(binaryTree, binaryTreeMethods);
  return binaryTree;
};

var testTree = { value: 5, left: null, right: null };

var binaryTreeMethods = {};

// insert, contains, depthFirstLog
binaryTreeMethods.insert = function(value) {
  var node = BinarySearchTree(value);
  var currentNode = this;

  while (currentNode) {
    if (currentNode.value > value) {
      if (!currentNode.left) {
        return currentNode.left = node;
      }
      currentNode = currentNode.left;
    } else {
      if (!currentNode.right) {
        return currentNode.right = node;
      }
      currentNode = currentNode.right;
    }
  }
};

binaryTreeMethods.contains = function(target) {
  var currentNode = this;
  while (currentNode) {
    if (currentNode.value === target) {
      return true;
    }
    if (currentNode.value > target) {
      currentNode = currentNode.left;
    } else {
      currentNode = currentNode.right;
    }
  }

  return false;
};
binaryTreeMethods.depthFirstLog = function(cb) {
  var recursor = (node) => {
    cb.call(node, node.value);
    if (node.left) {
      recursor(node.left);
    }
    if (node.right) {
      recursor(node.right);
    }
  };

  recursor(this);
};
/*
 * Complexity: What is the time complexity of the above functions?
 */
