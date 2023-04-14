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
