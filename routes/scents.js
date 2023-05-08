<<<<<<< HEAD
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
=======
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
>>>>>>> d101d3ff04871875c82cfc12bdb0a06cbbe647a5
