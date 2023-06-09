var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};
  someInstance.count = 0;

  _.extend(someInstance, stackMethods);

  return someInstance;
};

var storage = {};

var stackMethods = {};
stackMethods.push = function(value) {
  storage[this.count] = value;
  this.count++;
};

stackMethods.pop = function() {
  var result = storage[this.count - 1];
  delete storage[this.count - 1];

  if (this.count) {
    this.count--;
  }

  return result;
};

stackMethods.size = function() {
  return this.count;
};



