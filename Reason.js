/**
* This program defines an object: reason.
*/


var Reason = function(code, message) {
  this.code = code;
  this.message = message;

  this.why = function() {
    return {
      error: {
        code: this.code,
        message: this.message
      }
    }
  };

  this.changeCode = function(code) {
    this.code = code;
  };

  this.changeMessage = function(message) {
    this.message = message;
  };

  this.addMoreMessage = function(tail) {
    this.message += ' ' + tail;
  };

  this.addMoreMessageInFront = function(head) {
    this.message = head + ' ' + this.message;
  };
}


// export our router
module.exports = Reason;
