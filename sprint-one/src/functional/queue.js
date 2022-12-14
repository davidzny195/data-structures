var Queue = function() {
  var someInstance = {};
  // Use an object with numeric keys to store values
  var storage = {};
  // need to set index as a key to enqueue
  var index = 0;
  // Implement the methods below

  someInstance.enqueue = function(value) {
    // add key and value pair to storage at the end
    storage[index] = value;
    // increment index
    index++;
  };

  someInstance.dequeue = function() {
    var result = storage[0];
    // enter at end -> remove very first
    delete storage[0];
    // iterate over object key/value pairs to reduce index as position has moved
    for (var key in storage) {
      // set index - 1
      storage[key - 1] = storage[key];
      // remove old storage[key]
    }
    delete storage[someInstance.size() - 1];

    // need to lower index when
    if (index) {
      index--;
    }
    return result;
  };

  someInstance.size = function() {
    return Object.values(storage).length;
  };

  return someInstance;
};



// Enq - 0: Guy1
// Enq - 1: Guy2
// index is now 2
// Deq - 1: Guy2 -> 0: Guy2