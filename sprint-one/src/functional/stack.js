var Stack = function() {
  var someInstance = {};
  // Use an object with numeric keys to store values
  var storage = {};
  var count = 0;

  // Implement the methods below
  someInstance.push = function(value) {
    storage[count] = value;
    count++;
  };

  someInstance.pop = function() {
    // return the plate just like dequeue
    var result = storage[count - 1];
    // only need to remove last one
    delete storage[count - 1];

    if (count) {
      count--;
    }

    return result;
  };

  someInstance.size = function() {
    return count;
  };

  return someInstance;
};
