<<<<<<< HEAD
const express = require("express");

const router = express.Router();
const {
  getAllEvents,
  getEvent,
  createEvent,
  updateEvent,
  deleteEvent,
} = require("../controllers/events");

router.route("/").post(createEvent).get(getAllEvents);
router.route("/:id").get(getEvent).delete(deleteEvent).patch(updateEvent);

module.exports = router;
=======
const express = require("express");

const router = express.Router();
const {
  getAllEvents,
  getEvent,
  createEvent,
  updateEvent,
  deleteEvent,
} = require("../controllers/events");

router.route("/").post(createEvent).get(getAllEvents);
router.route("/:id").get(getEvent).delete(deleteEvent).patch(updateEvent);

module.exports = router;
>>>>>>> d101d3ff04871875c82cfc12bdb0a06cbbe647a5
