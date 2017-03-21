/**
 * Google promise chain example
 */

asyncThing1().then(function() {         // (A)
  return asyncThing2();
}).then(function() {                    // (B)
  return asyncThing3();
}).catch(function(err) {                // (C)
  return asyncRecovery1();
}).then(function() {                    // (D)
  return asyncThing4();
}, function(err) {                      // (E)
  return asyncRecovery2();
}).catch(function(err) {                // (F)
  console.log("Don't worry about it");
}).then(function() {                    // (G)
  console.log("All done!");
})
