/**
 * Q.denodeify example
 */

var Q = require('q');

var nodeStyleFunc = function(boolValue, intValue, strValue, callback) {
  if (boolValue) {
    callback(boolValue, intValue, strValue);
  } else {
    callback(null, intValue, strValue);
  }
};


nodeStyleFunc(true, 1, "denodeify", function(error, result1, result2) {
  if (error) {
    console.log(error);
  } else {
    console.log("Result: ", result1, result2);
  }
});


var qStyleFunc = Q.denodeify(nodeStyleFunc);

qStyleFunc(true, 1, "denodeify")
  .catch(function(error) {
    console.log(error);
  })
  .done(function(result) {
    console.log("Result: ", result);
  });

// when boolValue is true:
//
// true
// true
// Result:  undefined


// when boolValue is false:
//
// Result:  1 denodeify
// Result:  [ 1, 'denodeify' ]
