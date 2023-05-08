<<<<<<< HEAD
const Products = require("../models/Products");
const { StatusCodes } = require("http-status-codes");
const { BadRequestError, NotFoundError } = require("../errors");

const getAllProducts = async (req, res) => {
  const product = await Products.find();

  res.status(StatusCodes.OK).json({ products });
};

const getProduct = async (req, res) => {
  const {
    params: { id: productId },
  } = req;
  const product = await Products.findOne({
    _id: productId,
  });
  if (!product) {
    throw new NotFoundError(`No product  with id ${productId}`);
  }
  res.status(StatusCodes.OK).json({ product });
};
const createProduct = async (req, res) => {
  const { name, image, price } = req.body;
  if (name && image && price === null) {
    throw new BadRequestError("this  field can't be empty");
  }
  const product = await Products.create({
    name,
    image,
    price,
  });
  res.status(StatusCodes.CREATED).json({ product });
};
const updateProduct = async (req, res) => {
  const {
    body: { name, image, price },

    params: { id: productId },
  } = req;
  if (name && image && price === null) {
    throw new BadRequestError("this  field can't be empty");
  }
  const product = await Products.findByIdAndUpdate(
    { _id: productId },
    req.body,
    {
      new: true,
      runValidators: true,
    }
  );
  if (!product) {
    throw new NotFoundError(`No product with id ${productId}`);
  }
  res.status(StatusCodes.OK).json({ product });
};
const deleteProduct = async (req, res) => {
  const {
    params: { id: productId },
  } = req;
  const product = await Products.findByIdAndRemove({
    _id: productId,
  });
  if (!product) {
    throw new NotFoundError(`No product  with id ${productId}`);
  }
  res.status(StatusCodes.OK).json({ product });
};
module.exports = {
  getAllProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
};
=======
const Products = require("../models/Products");
const { StatusCodes } = require("http-status-codes");
const { BadRequestError, NotFoundError } = require("../errors");

const getAllProducts = async (req, res) => {
  const product = await Products.find();

  res.status(StatusCodes.OK).json({ products });
};

const getProduct = async (req, res) => {
  const {
    params: { id: productId },
  } = req;
  const product = await Products.findOne({
    _id: productId,
  });
  if (!product) {
    throw new NotFoundError(`No product  with id ${productId}`);
  }
  res.status(StatusCodes.OK).json({ product });
};
const createProduct = async (req, res) => {
  const { name, image, price } = req.body;
  if (name && image && price === null) {
    throw new BadRequestError("this  field can't be empty");
  }
  const product = await Products.create({
    name,
    image,
    price,
  });
  res.status(StatusCodes.CREATED).json({ product });
};
const updateProduct = async (req, res) => {
  const {
    body: { name, image, price },

    params: { id: productId },
  } = req;
  if (name && image && price === null) {
    throw new BadRequestError("this  field can't be empty");
  }
  const product = await Products.findByIdAndUpdate(
    { _id: productId },
    req.body,
    {
      new: true,
      runValidators: true,
    }
  );
  if (!product) {
    throw new NotFoundError(`No product with id ${productId}`);
  }
  res.status(StatusCodes.OK).json({ product });
};
const deleteProduct = async (req, res) => {
  const {
    params: { id: productId },
  } = req;
  const product = await Products.findByIdAndRemove({
    _id: productId,
  });
  if (!product) {
    throw new NotFoundError(`No product  with id ${productId}`);
  }
  res.status(StatusCodes.OK).json({ product });
};
module.exports = {
  getAllProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
};
>>>>>>> d101d3ff04871875c82cfc12bdb0a06cbbe647a5
