<<<<<<< HEAD
const mongoose = require("mongoose");

const ProductsSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "must provide title"],
    },
    image: {
      type: String,
      required: [true, "must provide image"],
    },
    description: {
      type: Number,

      required: [true, "must provide description"],
    },
  },

  { timestamps: true }
);

module.exports = mongoose.model("Products", ProductsSchema);
=======
const mongoose = require("mongoose");

const ProductsSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "must provide title"],
    },
    image: {
      type: String,
      required: [true, "must provide image"],
    },
    description: {
      type: Number,

      required: [true, "must provide description"],
    },
  },

  { timestamps: true }
);

module.exports = mongoose.model("Products", ProductsSchema);
>>>>>>> d101d3ff04871875c82cfc12bdb0a06cbbe647a5
