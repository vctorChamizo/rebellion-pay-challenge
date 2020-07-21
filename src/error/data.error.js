import { BAD_RANGE_PAGINATION, EMPTY_RESOURCES } from "../utils/constants";
import { BaseError } from "./base.error";

export class PaginationError extends BaseError {
  constructor(message) {
    super(message || BAD_RANGE_PAGINATION, 400);
  }
}

export class EmptyResourceError extends BaseError {
  constructor(message) {
    super(message || EMPTY_RESOURCES, 400);
  }
}
