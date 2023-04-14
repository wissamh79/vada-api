const mongoose = require("mongoose");

const EventsSchema = new mongoose.Schema(
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

module.exports = mongoose.model("Events", EventsSchema);
