export class BaseError extends Error {
  status: number;
  constructor(message?: string, status?: number) {
    super();

    Error.captureStackTrace(this, this.constructor);

    this.name = this.constructor.name;

    this.message = message || "Something went wrong, please try again";

    this.status = status || 500;
  }
}
