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
