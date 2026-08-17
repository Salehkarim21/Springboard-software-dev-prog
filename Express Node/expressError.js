

class ExpressError extends Error {
  constructor(message, status) {
    super();
    this.message = message;
    this.status = status;
    console.log(this.stack); // print the stack trace to the console
  }
}

module.exports = ExpressError;