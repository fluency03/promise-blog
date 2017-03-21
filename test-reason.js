/**
 * This is a test for Reason.
 */

var Reason = require('./Reason.js');

var reason = new Reason(100, "Some reason.");


console.log(reason.why());

reason.changeCode(200);
console.log(reason.why());

reason.changeMessage("Another reason.");
console.log(reason.why());

reason.addMoreMessage("More reason.");
console.log(reason.why());

reason.addMoreMessageInFront("More reason.");
console.log(reason.why());


console.log(new Reason(300, "New reason.").why());
