const Colors = require("../models/Colors");
const { StatusCodes } = require("http-status-codes");
const { BadRequestError, NotFoundError } = require("../errors");

const getAllColors = async (req, res) => {
  const colors = await Colors.find();

  res.status(StatusCodes.OK).json({ colors });
};

const getColor = async (req, res) => {
  const {
    params: { id: colorsId },
  } = req;
  const color = await Colors.findOne({
    _id: colorsId,
  });
  if (!color) {
    throw new NotFoundError(`No Color  with id ${colorId}`);
  }
  res.status(StatusCodes.OK).json({ color });
};
const createColor = async (req, res) => {
  const { name, price } = req.body;
  if (name && price === null) {
    throw new BadRequestError("this  field can't be empty");
  }
  const color = await Colors.create({
    name,

    price,
  });
  res.status(StatusCodes.CREATED).json({ color });
};
const updateColor = async (req, res) => {
  const {
    body: { name, price },

    params: { id: colorId },
  } = req;
  if (name && price === null) {
    throw new BadRequestError("this  field can't be empty");
  }
  const color = await Colors.findByIdAndUpdate({ _id: colorId }, req.body, {
    new: true,
    runValidators: true,
  });
  if (!color) {
    throw new NotFoundError(`No Color with id ${colorId}`);
  }
  res.status(StatusCodes.OK).json({ colors });
};
const deleteColor = async (req, res) => {
  const {
    params: { id: colorId },
  } = req;
  const color = await Colors.findByIdAndRemove({
    _id: colorId,
  });
  if (!color) {
    throw new NotFoundError(`No Color  with id ${colorId}`);
  }
  res.status(StatusCodes.OK).json({ color });
};
module.exports = {
  getAllColors,
  getColor,
  createColor,
  updateColor,
  deleteColor,
};
