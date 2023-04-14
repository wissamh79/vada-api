const mongoose = require("mongoose");

const OrdersSchema = new mongoose.Schema(
  {
    clientName: {
      type: String,
      required: [true, "must provide clientName"],
    },
    phoneNumber: {
      type: Number,
      required: [true, "must provide phoneNumber"],
      maxlength: [11, "phoneNumber can not be more than 11 number"],
    },
    address: {
      type: String,
      required: [true, "must provide  address"],
      trim: true,
      maxlength: [250, "text can not be more than 250 characters"],
    },

    template: {
      type: String,
      required: [true, "must provide template"],
    },
    color: {
      type: String,
      required: [true, "must provide  color"],
    },
    scent: {
      type: String,
      required: [true, "must provide scent"],
    },
    count: { type: Number, default: 1 },
    gift: {
      type: Boolean,
      required: [true, "must provide  gift"],
    },
    giftDetails: {
      type: String,

      trim: true,
      maxlength: [250, "giftDetails can not be more than 250 characters"],
    },
    completed: {
      type: Boolean,
      required: [true, "must provide  gift"],
    },
    priceTotal: {
      type: Number,
      required: [true, "must provide  priceTotal"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Orders", OrdersSchema);
