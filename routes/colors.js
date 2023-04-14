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
