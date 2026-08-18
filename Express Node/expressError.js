<<<<<<< HEAD


class ExpressError extends Error {
  constructor(message, status) {
    super();
    this.message = message;
    this.status = status;
    console.log(this.stack); // print the stack trace to the console
  }
}

=======


class ExpressError extends Error {
  constructor(message, status) {
    super();
    this.message = message;
    this.status = status;
    console.log(this.stack); // print the stack trace to the console
  }
}

>>>>>>> 7a36318 (ignore)
module.exports = ExpressError;