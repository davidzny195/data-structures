var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};
  someInstance.count = 0;

  extend(someInstance, stackMethods);

  return someInstance;
};

var storage = {};

var extend = function(to, from) {
  for (var key in from) {
    to[key] = from[key];
  }
};

var stackMethods = {
  push: function(value) {
    storage[this.count] = value;
    this.count++;
  },

  pop: function() {
    var result = storage[this.count - 1];
    delete storage[this.count - 1];

    if (this.count) {
      this.count--;
    }

    return result;
  },

  size: function() {
    return this.count;
  }
};


