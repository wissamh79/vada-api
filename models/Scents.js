<<<<<<< HEAD
const mongoose = require("mongoose");

const ScentsSchema = new mongoose.Schema(
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

module.exports = mongoose.model("Scents", ScentsSchema);
=======
const mongoose = require("mongoose");

const ScentsSchema = new mongoose.Schema(
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

module.exports = mongoose.model("Scents", ScentsSchema);
>>>>>>> d101d3ff04871875c82cfc12bdb0a06cbbe647a5
