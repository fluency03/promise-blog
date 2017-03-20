// Nested Callbacks
get('/url', function(error, data) {
  if(!error) {
    step1(data, function (error1, value1) {
      if(!error1) {
        step2(value1, function(error2, value2) {
          if(!error2) {
            step3(value2, function(error3, value3) {
              if(!error3) {
                step4(value3, function(error4, value4) {
                  if(!error4) {
                    // do something with value4
                    console.log(value4);
                  } else {
                    // handle error4
                  }
                });
              } else {
                // handle error3
              }
            });
          } else {
            // handle error2
          }
        });
      } else {
        // handle error1
      }
    });
  } else {
    // handle error
  }
});

// vs

// Chained Promises
var promise = new Promise(function(resolve, reject) {
  var data = get('/url');
  resolve(data);
});

promise.then(promisedStep1)
.then(promisedStep2)
.then(promisedStep3)
.then(promisedStep4)
.then(function (value4) {
  // do something with value4
  console.log(value4);
})
.catch(function (error) {
  // handle any error from all above steps
  console.log(error);
});
