const express = require("express");

const router = express.Router();
const {
  getAllTemplate,
  getTemplate,
  createTemplate,
  updateTemplate,
  deleteTemplate,
} = require("../controllers/template");

router.route("/").post(createTemplate).get(getAllTemplate);
router
  .route("/:id")
  .get(getTemplate)
  .delete(deleteTemplate)
  .patch(updateTemplate);

module.exports = router;
