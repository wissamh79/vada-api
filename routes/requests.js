<<<<<<< HEAD
const express = require("express");

const router = express.Router();
const {
  getAllRequests,
  getRequest,
  createRequest,
  updateRequest,
  deleteRequest,
} = require("../controllers/requests");

router.route("/").post(createRequest).get(getAllRequests);
router.route("/:id").get(getRequest).delete(deleteRequest).patch(updateRequest);

module.exports = router;
=======
const express = require("express");

const router = express.Router();
const {
  getAllRequests,
  getRequest,
  createRequest,
  updateRequest,
  deleteRequest,
} = require("../controllers/requests");

router.route("/").post(createRequest).get(getAllRequests);
router.route("/:id").get(getRequest).delete(deleteRequest).patch(updateRequest);

module.exports = router;
>>>>>>> d101d3ff04871875c82cfc12bdb0a06cbbe647a5
