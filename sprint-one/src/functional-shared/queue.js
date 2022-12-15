var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};
  someInstance.count = 0;

  _.extend(someInstance, queueMethods);

  return someInstance;

};

var storage = {};

var queueMethods = {};

queueMethods.enqueue = function(value) {
  storage[this.count] = value;
  this.count++;
},

queueMethods.dequeue = function() {
  if (this.count) {
    this.count--;
  }

  var result = storage[0];
  delete storage[0];

  for (var key in storage) {
    storage[key - 1] = storage[key];
  }
  delete storage[this.count];

  return result;
},

queueMethods.size = function() {
  return this.count;
}
;


