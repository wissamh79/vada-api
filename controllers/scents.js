const Scents = require("../models/Scents");
const { StatusCodes } = require("http-status-codes");
const { BadRequestError, NotFoundError } = require("../errors");

const getAllScents = async (req, res) => {
  const scents = await Scents.find();

  res.status(StatusCodes.OK).json({ scents });
};

const getScent = async (req, res) => {
  const {
    params: { id: scentId },
  } = req;
  const scent = await Scents.findOne({
    _id: scentId,
  });
  if (!scent) {
    throw new NotFoundError(`No Scent  with id ${scentId}`);
  }
  res.status(StatusCodes.OK).json({ scent });
};
const createScent = async (req, res) => {
  const { name, price } = req.body;
  if (name && price === null) {
    throw new BadRequestError("this  field can't be empty");
  }
  const scent = await Scents.create({
    name,

    price,
  });
  res.status(StatusCodes.CREATED).json({ scent });
};
const updateScent = async (req, res) => {
  const {
    body: { name, price },

    params: { id: scentId },
  } = req;
  if (name && price === null) {
    throw new BadRequestError("this  field can't be empty");
  }
  const scent = await Scents.findByIdAndUpdate({ _id: scentId }, req.body, {
    new: true,
    runValidators: true,
  });
  if (!scent) {
    throw new NotFoundError(`No Scent with id ${scentId}`);
  }
  res.status(StatusCodes.OK).json({ scents });
};
const deleteScent = async (req, res) => {
  const {
    params: { id: scentId },
  } = req;
  const scent = await Scents.findByIdAndRemove({
    _id: scentId,
  });
  if (!scent) {
    throw new NotFoundError(`No Scent  with id ${scentId}`);
  }
  res.status(StatusCodes.OK).json({ scent });
};
module.exports = {
  getAllScents,
  getScent,
  createScent,
  updateScent,
  deleteScent,
};
