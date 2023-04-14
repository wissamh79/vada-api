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
