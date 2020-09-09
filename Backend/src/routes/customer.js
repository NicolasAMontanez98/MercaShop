const router = require("express").Router();
const {
  checkInCustomer,
  logInCustomer,
  getCustomer,
  getCustomers,
  deleteCustomer,
  updateCustomer,
} = require("../controllers/customer.controller");

router.route("/").get(getCustomers);
router.route("/:id").get(getCustomer).delete(deleteCustomer).put(updateCustomer);
router.route("/registro").post(checkInCustomer);
router.route("/ingreso").post(logInCustomer);

module.exports = router;
