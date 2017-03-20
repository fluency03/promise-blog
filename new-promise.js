var iAmChang = false;

var promise = new Promise(function(resolve, reject) {
  // do something

  if (iAmChang) {
    resolve("You are Chang!"); // value
  }
  else {
    reject(Error("You are not Chang!")); // reason
  }
});


// promise.then(function(result) {
//   console.log(result); // "You are Chang!"
// }, function(err) {
//   console.log(err); // Error: You are not Chang!
// });


// promise.then(function(result) {
//   console.log(result); // "You are Chang!"
// }).catch(function(err) {
//   console.log(err); // Error: You are not Chang!
// });


/* ------------------------ 4 scenarios ------------------------ */

// scenario 1, iAmChang === true;
promise2 = promise.then(function(result) {
  console.log(result);
  return result;
}, function(err) {
  // not called
});

// scenario 2, iAmChang === true;
promise2 = promise.then(function(result) {
  console.log(result);
  throw Error("You are not Chang!");
  return result;
}, function(err) {
  // not called
});

// scenario 3, iAmChang === false;
promise2 = promise.then(function(result) {
  // not called
}, function(err) {
  console.log(err);
  return err;
});

// scenario 4, iAmChang === false;
promise2 = promise.then(function(result) {
  // not called
}, function(err) {
  console.log(err);
  throw Error("You are not Chang, Again!");
  return err;
});


promise2.then(function(result) {
  console.log(result);
}, function(err) {
  console.log(err);
});

// scenario 1, output:
// You are Chang!
// You are Chang!

// scenario 2, output:
// You are Chang!
// Error: You are not Chang!

// scenario 3, output:
// Error: You are not Chang!
// Error: You are not Chang!

// scenario 4, output:
// Error: You are not Chang!
// Error: You are not Chang!
