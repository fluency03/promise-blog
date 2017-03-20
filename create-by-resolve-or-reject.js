// value: string
Promise.resolve('I am Chang!').then(function(value) {
  console.log(value); // "I am Chang!"
}, function(error) {
  // not called
});


// value: array
Promise.resolve(['I', 'am', 'Chang', '!']).then(function(value) {
  console.log(value[2]); // "Chang"
}, function(error) {
  // not called
});


// promise
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

Promise.resolve(promise).then(function(value) {
  console.log(value); // "You are Chang!" when iAmChang == true;
}, function(error) {
  console.log(error); // "You are not Chang!" when iAmChang == false;
});

console.log(Promise.resolve(promise) === promise); // true


// thenable1
var thenable1 = { then: function(resolve) {
  throw Error('thenable1 Throwing');
  resolve('thenable1 Resolving');
}};


Promise.resolve(thenable1).then(function(value) {
  console.log(value);
}, function(error) {
  console.log(error); // Error: thenable1 Throwing
});

console.log(Promise.resolve(thenable1) instanceof Promise); // true


// thenable2
var thenable2 = { then: function(resolve) {
  resolve('thenable2 Resolving');
}};

Promise.resolve(thenable2).then(function(value) {
  console.log(value); // "thenable2 Resolving"
}, function(error) {
  console.log(error);
});

console.log(Promise.resolve(thenable2) instanceof Promise); // true



// reason
var reason = new Error('Not Chang!');

Promise.reject(reason).then(function(value) {
  // not called
}, function(error) {
  console.log(error); // Error: Not Chang!
  console.log(error === reason); // true
});
