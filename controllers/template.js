const Template = require("../models/Template");
const { StatusCodes } = require("http-status-codes");
const { BadRequestError, NotFoundError } = require("../errors");

const getAllTemplate = async (req, res) => {
  const template = await Template.find();

  res.status(StatusCodes.OK).json({ template });
};

const getTemplate = async (req, res) => {
  const {
    params: { id: templateId },
  } = req;
  const template = await Template.findOne({
    _id: templateId,
  });
  if (!template) {
    throw new NotFoundError(`No Template  with id ${templateId}`);
  }
  res.status(StatusCodes.OK).json({ template });
};
const createTemplate = async (req, res) => {
  const { name, image, price } = req.body;
  if (name && image && price === null) {
    throw new BadRequestError("this  field can't be empty");
  }
  const template = await Template.create({
    name,
    image,
    price,
  });
  res.status(StatusCodes.CREATED).json({ template });
};
const updateTemplate = async (req, res) => {
  const {
    body: { name, image, price },

    params: { id: templateId },
  } = req;
  if (name && image && price === null) {
    throw new BadRequestError("this  field can't be empty");
  }
  const template = await Template.findByIdAndUpdate(
    { _id: templateId },
    req.body,
    {
      new: true,
      runValidators: true,
    }
  );
  if (!template) {
    throw new NotFoundError(`No Template with id ${templateId}`);
  }
  res.status(StatusCodes.OK).json({ template });
};
const deleteTemplate = async (req, res) => {
  const {
    params: { id: templateId },
  } = req;
  const template = await Template.findByIdAndRemove({
    _id: templateId,
  });
  if (!template) {
    throw new NotFoundError(`No Template  with id ${templateId}`);
  }
  res.status(StatusCodes.OK).json({ template });
};
module.exports = {
  getAllTemplate,
  getTemplate,
  createTemplate,
  updateTemplate,
  deleteTemplate,
};
