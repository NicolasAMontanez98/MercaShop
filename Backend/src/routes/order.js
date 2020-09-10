const router = require("express").Router();
const {
  getOrder,
  getOrders,
  postOrder,
  deleteOrder,
  payOrder,
} = require("../controllers/order.controller");

router.route("/").get(getOrders);
router.route("/:id").delete(deleteOrder);
router.route("/:id/pay").put(payOrder);

module.exports = router;