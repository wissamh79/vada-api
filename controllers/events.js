const Events = require("../models/Events");
const { StatusCodes } = require("http-status-codes");
const { BadRequestError, NotFoundError } = require("../errors");

const getAllEvents = async (req, res) => {
  const events = await Events.find();

  res.status(StatusCodes.OK).json({ events });
};

const getEvent = async (req, res) => {
  const {
    params: { id: eventId },
  } = req;
  const event = await Events.findOne({
    _id: eventId,
  });
  if (!eventId) {
    throw new NotFoundError(`No Event  with id ${eventId}`);
  }
  res.status(StatusCodes.OK).json({ event });
};
const createEvent = async (req, res) => {
  const { name, image, price } = req.body;
  if (name && image && price === null) {
    throw new BadRequestError("this  field can't be empty");
  }
  const event = await Events.create({
    name,
    image,
    price,
  });
  res.status(StatusCodes.CREATED).json({ event });
};
const updateEvent = async (req, res) => {
  const {
    body: { name, image, price },

    params: { id: eventId },
  } = req;
  if (name && image && price === null) {
    throw new BadRequestError("this  field can't be empty");
  }
  const event = await Events.findByIdAndUpdate({ _id: eventId }, req.body, {
    new: true,
    runValidators: true,
  });
  if (!eventId) {
    throw new NotFoundError(`No Event with id ${eventId}`);
  }
  res.status(StatusCodes.OK).json({ event });
};
const deleteEvent = async (req, res) => {
  const {
    params: { id: eventId },
  } = req;
  const event = await Events.findByIdAndRemove({
    _id: eventId,
  });
  if (!eventId) {
    throw new NotFoundError(`No Event  with id ${eventId}`);
  }
  res.status(StatusCodes.OK).json({ event });
};
module.exports = {
  getAllEvents,
  getEvent,
  createEvent,
  updateEvent,
  deleteEvent,
};
