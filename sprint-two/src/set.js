var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = []; // fix me
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  var storage = this._storage;
  if (storage.includes(item)) {
    return;
  }
  storage.push(item);
};

setPrototype.contains = function(item) {
  var storage = this._storage;
  if (storage.includes(item)) {
    return true;
  }
  return false;
};

setPrototype.remove = function(item) {
  var storage = this._storage;
  var index = storage.indexOf(item);
  storage.splice(index, 1);
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
