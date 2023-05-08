<<<<<<< HEAD
const { StatusCodes } = require('http-status-codes');
const CustomAPIError = require('./custom-api');

class NotFoundError extends CustomAPIError {
  constructor(message) {
    super(message);
    this.statusCode = StatusCodes.NOT_FOUND;
  }
}

module.exports = NotFoundError;
=======
const { StatusCodes } = require('http-status-codes');
const CustomAPIError = require('./custom-api');

class NotFoundError extends CustomAPIError {
  constructor(message) {
    super(message);
    this.statusCode = StatusCodes.NOT_FOUND;
  }
}

module.exports = NotFoundError;
>>>>>>> d101d3ff04871875c82cfc12bdb0a06cbbe647a5
