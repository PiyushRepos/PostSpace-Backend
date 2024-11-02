class ApiError extends Error {
  constructor(
    statusCode = 500,
    message = "Something went wrong.",
    errors = []
  ) {
    super(message);
    this.success = false;
    this.statusCode = statusCode;
    this.message = message;
    this.data = null;
    this.errors = errors;
  }
}

export default ApiError;
