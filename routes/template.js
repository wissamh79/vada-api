<<<<<<< HEAD
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
=======
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
>>>>>>> d101d3ff04871875c82cfc12bdb0a06cbbe647a5
