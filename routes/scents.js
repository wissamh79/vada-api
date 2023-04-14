const express = require("express");

const router = express.Router();
const {
  getAllScents,
  getScent,
  createScent,
  updateScent,
  deleteScent,
} = require("../controllers/scents");

router.route("/").post(createScent).get(getAllScents);
router.route("/:id").get(getScent).delete(deleteScent).patch(updateScent);

module.exports = router;
