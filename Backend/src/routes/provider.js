const router = require("express").Router();
const {
  checkInProvider,
  logInProvider,
  getProvider,
  getProviders,
  deleteProvider,
} = require("../controllers/provider.controller");

router.route("/").get(getProviders);
router.route("/:id").get(getProvider).delete(deleteProvider);
router.route("/registro").post(checkInProvider);
router.route("/ingreso").post(logInProvider);

module.exports = router;
