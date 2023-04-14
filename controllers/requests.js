const Requests = require("../models/Requests");
const { StatusCodes } = require("http-status-codes");
const { BadRequestError, NotFoundError } = require("../errors");

const getAllRequests = async (req, res) => {
  const requests = await Requests.find();

  res.status(StatusCodes.OK).json({ requests });
};

const getRequest = async (req, res) => {
  const {
    params: { id: requestId },
  } = req;
  console.log(requestId);
  const request = await Requests.findOne({
    _id: requestId,
  });
  if (!request) {
    throw new NotFoundError(`No request with id ${requestId}`);
  }
  res.status(StatusCodes.OK).json({ request });
};
const createRequest = async (req, res) => {
  const request = await Requests.create(req.body);
  res.status(StatusCodes.CREATED).json({ request });
};
const updateRequest = async (req, res) => {
  const {
    body: { phone, address },

    params: { id: requestId },
  } = req;
  if (phone && address === "") {
    throw new BadRequestError("this  field can't be empty");
  }
  const request = await Requests.findByIdAndUpdate(
    { _id: requestId },
    req.body,
    {
      new: true,
      runValidators: true,
    }
  );
  if (!request) {
    throw new NotFoundError(`No request with id ${requestId}`);
  }
  res.status(StatusCodes.OK).json({ request });
};
const deleteRequest = async (req, res) => {
  const {
    params: { id: requestId },
  } = req;
  const request = await Requests.findByIdAndRemove({
    _id: requestId,
  });
  if (!request) {
    throw new NotFoundError(`No request with id ${requestId}`);
  }
  res.status(StatusCodes.OK).json({ request });
};
module.exports = {
  getAllRequests,
  getRequest,
  createRequest,
  updateRequest,
  deleteRequest,
};
