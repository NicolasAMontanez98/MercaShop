const router = require("express").Router();
const {
  createProduct,
  deleteProduct,
  getProduct,
  getProducts,
  updateProduct,
} = require("../controllers/product.controller");

router.route("/").get();
