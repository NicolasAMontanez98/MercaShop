const router = require("express").Router();
const {
  checkInCustomer,
  logInCustomer,
  getCustomer,
  getCustomers,
  deleteCustomer,
} = require("../controllers/customer.controller");

router.route("/").get(getCustomers);
router.route("/:id").get(getCustomer).delete(deleteCustomer);
router.route("/registro").post(checkInCustomer);
router.route("/ingreso").post(logInCustomer);

module.exports = router;
