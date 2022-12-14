var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};
  someInstance.index = 0;

  extend(someInstance, queueMethods);

  return someInstance;

};

var storage = {};

var extend = function(to, from) {
  for (var key in from) {
    to[key] = from[key];
  }
};

var queueMethods = {
  enqueue: function() {

  },

  dequeue: function() {

  },

  size: function() {

  }
};


