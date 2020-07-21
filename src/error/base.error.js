export class BaseError extends Error {
  status;
  constructor(message, status) {
    super();

    Error.captureStackTrace(this, this.constructor);

    this.name = this.constructor.name;

    this.message = message || "Something went wrong, please try again";

    this.status = status || 500;
  }
}
