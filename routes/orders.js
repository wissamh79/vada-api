<<<<<<< HEAD
const express = require("express");

const router = express.Router();
const {
  getAllOrders,
  getOrder,
  createOrder,
  updateOrder,
  deleteOrder,
} = require("../controllers/orders");

router.route("/").post(createOrder).get(getAllOrders);
router.route("/:id").get(getOrder).delete(deleteOrder).patch(updateOrder);

module.exports = router;
=======
const express = require("express");

const router = express.Router();
const {
  getAllOrders,
  getOrder,
  createOrder,
  updateOrder,
  deleteOrder,
} = require("../controllers/orders");

router.route("/").post(createOrder).get(getAllOrders);
router.route("/:id").get(getOrder).delete(deleteOrder).patch(updateOrder);

module.exports = router;
>>>>>>> d101d3ff04871875c82cfc12bdb0a06cbbe647a5
