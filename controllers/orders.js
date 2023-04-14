const Orders = require("../models/Orders");
const { StatusCodes } = require("http-status-codes");
const { BadRequestError, NotFoundError } = require("../errors");

const getAllOrders = async (req, res) => {
  const orders = await Orders.find();

  res.status(StatusCodes.OK).json({ orders });
};

const getOrder = async (req, res) => {
  const {
    params: { id: orderId },
  } = req;
  console.log(orderId);
  const order = await Orders.findOne({
    _id: orderId,
  });
  if (!order) {
    throw new NotFoundError(`No order with id ${orderId}`);
  }
  res.status(StatusCodes.OK).json({ order });
};
const createOrder = async (req, res) => {
  const order = await Orders.create(req.body);
  res.status(StatusCodes.CREATED).json({ order });
};
const updateOrder = async (req, res) => {
  const {
    body: { phone, address },

    params: { id: orderId },
  } = req;
  if (phone && address === "") {
    throw new BadRequestError("this  field can't be empty");
  }
  const order = await Orders.findByIdAndUpdate({ _id: orderId }, req.body, {
    new: true,
    runValidators: true,
  });
  if (!order) {
    throw new NotFoundError(`No order with id ${orderId}`);
  }
  res.status(StatusCodes.OK).json({ order });
};
const deleteOrder = async (req, res) => {
  const {
    params: { id: orderId },
  } = req;
  const order = await Orders.findByIdAndRemove({
    _id: orderId,
  });
  if (!order) {
    throw new NotFoundError(`No order with id ${orderId}`);
  }
  res.status(StatusCodes.OK).json({ order });
};
module.exports = {
  getAllOrders,
  getOrder,
  createOrder,
  updateOrder,
  deleteOrder,
};
