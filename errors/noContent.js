<<<<<<< HEAD
const { StatusCodes } = require("http-status-codes");
const CustomAPIError = require("./custom-api");

class noContentError extends CustomAPIError {
  constructor(message) {
    super(message);
    this.statusCode = StatusCodes.NO_CONTENT;
  }
}

module.exports = noContentError;
=======
const { StatusCodes } = require("http-status-codes");
const CustomAPIError = require("./custom-api");

class noContentError extends CustomAPIError {
  constructor(message) {
    super(message);
    this.statusCode = StatusCodes.NO_CONTENT;
  }
}

module.exports = noContentError;
>>>>>>> d101d3ff04871875c82cfc12bdb0a06cbbe647a5
