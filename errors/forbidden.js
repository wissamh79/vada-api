<<<<<<< HEAD
const { StatusCodes } = require("http-status-codes");
const CustomAPIError = require("./custom-api");

class forbiddenError extends CustomAPIError {
  constructor(message) {
    super(message);
    this.statusCode = StatusCodes.FORBIDDEN;
  }
}

module.exports = forbiddenError;
=======
const { StatusCodes } = require("http-status-codes");
const CustomAPIError = require("./custom-api");

class forbiddenError extends CustomAPIError {
  constructor(message) {
    super(message);
    this.statusCode = StatusCodes.FORBIDDEN;
  }
}

module.exports = forbiddenError;
>>>>>>> d101d3ff04871875c82cfc12bdb0a06cbbe647a5
