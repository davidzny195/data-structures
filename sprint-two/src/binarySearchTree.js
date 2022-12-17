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
  // var node = BinarySearchTree(value);    <- not sure if we should use this
  var currentNode = this;
  var child = { value: value, left: null, right: null };

  // Through recursion
  // var recursion = function(node) { //node = baseTree, value = 2 //node = node.left
  //   if (node.value < value) {
  //     if (!node.right) {
  //       return node.right = child;
  //     }
  //     recursion(node.right);
  //   }
  //   //if value is less than parent tree value & NO child
  //   if (node.value > value) {
  //     if (!node.left) {
  //       return node.left = child;
  //     }
  //     recursion(node.left);
  //   }
  // };
  // recursion(parent);

  while (currentNode) {
    if (currentNode.value > value) {
      if (!currentNode.left) {
        return currentNode.left = child;
      }
      currentNode = currentNode.left;
    } else {
      if (!currentNode.right) {
        return currentNode.right = child;
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
      // need an else if because current node is being replaced above
    } else if (currentNode.value < target) {
      currentNode = currentNode.right;
    }
  }

  return false;
};

binaryTreeMethods.depthFirstLog = function(cb) {
  var recursor = (node) => {
    cb(node.value);
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
