

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(key, value) {
  var index = getIndexBelowMaxForKey(key, this._limit);

  // var hashTable = [
  //   [[k, v], [k1, v1]],
  //   [[k2, v2]],
  //   []
  // ];
  //create an array with key and value
  //check for index length
  var tuple = [key, value];
  // [ , , ,[['steven', 'seagal']]]
  var bucket = this._storage.get(index);

  // if bucket
  if (bucket) {
    for (var i = 0; i < bucket.length; i++) {
    // replace key if key exists
      if (bucket[i][0] === key) {
        return bucket[i][1] = value;
      }
    }
    // need to solve for when key exists, because it will replace + push
    // set empty variable if needed
    bucket.push(tuple);
    // else if no bucket
  } else {
    this._storage.set(index, [tuple]);
  }


// [ , , ,[['steven', 'seagal']]]

HashTable.prototype.retrieve = function(key) {
  var index = getIndexBelowMaxForKey(key, this._limit);
  var bucket = this._storage.get(index);
  for (var i = 0; i < bucket.length; i++) {
    if (bucket[i][0] === key) {
      return bucket[i][1];
    }
  }
};


// var hashTable = [
//   [[k, v], [k1, v1]],
//   [[k2, v2]],
//   []
// ];
HashTable.prototype.remove = function(key) {
  var index = getIndexBelowMaxForKey(key, this._limit);
  var bucket = this._storage.get(index);
  for (var i = 0; i < bucket.length; i++) {
    if (bucket[i][0] === key) {
      bucket.splice(i, 1);
    }
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


