<<<<<<< HEAD
const express = require("express");

const router = express.Router();
const {
  getAllProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/products");

router.route("/").post(createProduct).get(getAllProducts);
router.route("/:id").get(getProduct).delete(deleteProduct).patch(updateProduct);

module.exports = router;
=======
const express = require("express");

const router = express.Router();
const {
  getAllProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/products");

router.route("/").post(createProduct).get(getAllProducts);
router.route("/:id").get(getProduct).delete(deleteProduct).patch(updateProduct);

module.exports = router;
>>>>>>> d101d3ff04871875c82cfc12bdb0a06cbbe647a5
