var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.count = 0;
};


Stack.prototype.push = function(value) {
  this.storage[this.count] = value;
  this.count++;
};

Stack.prototype.pop = function() {
  var result = this.storage[this.count - 1];
  delete this.storage[this.count - 1];

  if (this.count) {
    this.count--;
  }

  return result;
};

Stack.prototype.size = function() {
  return this.count;
};


