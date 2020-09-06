const router = require("express").Router();
const {
  createProduct,
  deleteProduct,
  getProduct,
  getProducts,
  updateProduct,
} = require("../controllers/product.controller");

router.route("/").get(getProducts);
router.route("/:id").get(getProduct).delete(deleteProduct).put(updateProduct);
router.route("/crear").post(createProduct);

module.exports = router;