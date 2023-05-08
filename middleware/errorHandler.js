<<<<<<< HEAD
const errorHandler = (err, req, res, next) => {
  const status = res.statusCode ? res.statusCode : 500; //server error
  res.status(status);
  res.json({ message: err.message });
};
module.exports = errorHandler;
=======
const errorHandler = (err, req, res, next) => {
  const status = res.statusCode ? res.statusCode : 500; //server error
  res.status(status);
  res.json({ message: err.message });
};
module.exports = errorHandler;
>>>>>>> d101d3ff04871875c82cfc12bdb0a06cbbe647a5
