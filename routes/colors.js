<<<<<<< HEAD
const express = require("express");

const router = express.Router();
const {
  getAllColors,
  getColor,
  createColor,
  updateColor,
  deleteColor,
} = require("../controllers/colors");

router.route("/").post(createColor).get(getAllColors);
router.route("/:id").get(getColor).delete(deleteColor).patch(updateColor);

module.exports = router;
=======
const express = require("express");

const router = express.Router();
const {
  getAllColors,
  getColor,
  createColor,
  updateColor,
  deleteColor,
} = require("../controllers/colors");

router.route("/").post(createColor).get(getAllColors);
router.route("/:id").get(getColor).delete(deleteColor).patch(updateColor);

module.exports = router;
>>>>>>> d101d3ff04871875c82cfc12bdb0a06cbbe647a5
