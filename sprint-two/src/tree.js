var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = []; // fix me
  _.extend(newTree, treeMethods);

  return newTree;
};


var treeMethods = {};
treeMethods.addChild = function(value) {
  var child = Tree(value);
  this.children.push(child);
};

treeMethods.contains = function(target) {
  var result = [];
  var recurser = function(node) {
    if (node.value === target) {
      result.push(target);
    }
    if (node.children.length) {
      node.children.forEach((child) => {
        recurser(child);
      });
    }
  };
  recurser(this);

  return result.length ? true : false;
};



/*
* Complexity: What is the time complexity of the above functions?
*/

var myTree = Tree('Alpha');