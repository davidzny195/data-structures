// Instantiate a new graph
var Graph = function() {
  this.vertices = {};
};

var exampleGraph = {
  1: [2, 6, 3],
  2: [5, 4, 1],
  4: [5, 3, 2, 7],
  7: [4]
};
// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  // add node as key to vertices and initiate an array
  if (this.vertices.hasOwnProperty(node)) {
    return;
  }
  this.vertices[node] = [];
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  if (this.vertices.hasOwnProperty(node)) {
    return true;
  }
  return false;

};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  delete this.vertices[node];
  for (var key in this.vertices) {
    if (this.vertices[key].includes(node)) {
      this.vertices[key].splice(this.vertices[key].indexOf(node), 1);
    }
  }

};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  if (this.vertices[fromNode].indexOf(toNode) !== -1) {
    return true;
  }
  return false;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  this.vertices[fromNode].push(toNode);
  this.vertices[toNode].push(fromNode);
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  this.vertices[fromNode].splice(this.vertices[fromNode].indexOf(toNode), 1);
  this.vertices[toNode].splice(this.vertices[toNode].indexOf(fromNode), 1);

};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for (var key in this.vertices) {
    cb(key);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


