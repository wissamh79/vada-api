<<<<<<< HEAD
const mongoose = require("mongoose");

const ColorsSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "must provide name"],
    },

    price: {
      type: Number,

      required: [true, "must provide price"],
    },
  },

  { timestamps: true }
);

module.exports = mongoose.model("Colors", ColorsSchema);
=======
const mongoose = require("mongoose");

const ColorsSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "must provide name"],
    },

    price: {
      type: Number,

      required: [true, "must provide price"],
    },
  },

  { timestamps: true }
);

module.exports = mongoose.model("Colors", ColorsSchema);
>>>>>>> d101d3ff04871875c82cfc12bdb0a06cbbe647a5
