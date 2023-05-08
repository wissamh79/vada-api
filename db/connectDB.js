<<<<<<< HEAD
const mongoose = require("mongoose");
const connectDB = (url) => {
  mongoose.set("strictQuery", false);
  return mongoose.connect(url, {
    useNewUrlParser: true,

    useUnifiedTopology: true,
  });
};
module.exports = connectDB;
=======
const mongoose = require("mongoose");
const connectDB = (url) => {
  mongoose.set("strictQuery", false);
  return mongoose.connect(url, {
    useNewUrlParser: true,

    useUnifiedTopology: true,
  });
};
module.exports = connectDB;
>>>>>>> d101d3ff04871875c82cfc12bdb0a06cbbe647a5
