<<<<<<< HEAD
const mongoose = require("mongoose");

const TemplateSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "must provide name"],
    },
    image: {
      type: String,
      required: [true, "must provide image"],
    },
    price: {
      type: Number,

      required: [true, "must provide price"],
    },
  },

  { timestamps: true }
);

module.exports = mongoose.model("Template", TemplateSchema);
=======
const mongoose = require("mongoose");

const TemplateSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "must provide name"],
    },
    image: {
      type: String,
      required: [true, "must provide image"],
    },
    price: {
      type: Number,

      required: [true, "must provide price"],
    },
  },

  { timestamps: true }
);

module.exports = mongoose.model("Template", TemplateSchema);
>>>>>>> d101d3ff04871875c82cfc12bdb0a06cbbe647a5
