var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = Object.create(stackMethods);
  someInstance.count = 0;
  someInstance.storage = {};

  return someInstance;
};

var stackMethods = {};

stackMethods.push = function(value) {
  this.storage[this.count] = value;
  this.count++;
};

stackMethods.pop = function() {
  var result = this.storage[this.count - 1];
  delete this.storage[this.count - 1];

  if (this.count) {
    this.count--;
  }

  return result;
};

stackMethods.size = function() {
  return this.count;
};