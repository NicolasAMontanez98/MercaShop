const productCtrl = {};

const Product = require("../models/product.model");

productCtrl.createProduct = async (req, res) => {
  try {
    const { name, image, decription, quantity, price, category, discount } = req.body;
    const newProduct = new Product({
      name,
      image,
      decription,
      quantity,
      price,
      category,
      discount
    });
    await newProduct.save();
    res.status(200).json('Producto agregado exitosamente.');
    // res.status(200).send({ message: 'New Product Created', data: newProduct });
  } catch (error) {
    res.status(400).json(error);
    // res.status(400).send({ message: ' Error in Creating Product.' });
  }
};

productCtrl.getProduct = async (req, res) => {
  try {
    const product = await Product.findOne({ _id: req.params.id });
    res.status(200).json(product);
  } catch (error) {
    res.status(400).json(error);
  }
};

productCtrl.getProducts = async (req, res) => {
  try {
    const category = req.query.category ? {category: req.query.category} : {};
    const search = req.query.search ? {
      name: {
        $regex: req.query.search,
        $options: 'i'
      }
    } : {};
    const products = await Product.find({...category, ...search});
    res.status(200).json(products);
  } catch (error) {
    res.status(400).json(error);
  }
};

productCtrl.deleteProduct = async (req, res) => {
  try {
    Product.findByIdAndDelete(req.params.id);
    res.status(200).json('El producto ha sido borrado.');
  } catch (error) {
    res.status(400).json(error);
  }
};

productCtrl.updateProduct = async (req, res) => {
  try {
    const { title, urlImage, description, quantity, price } = req.body;
    const newProduct = new Product({
      title,
      urlImage,
      description,
      quantity,
      price,
    });
    const updateProduct = Product.findByIdAndUpdate(req.params.id, newProduct);
    res.status(200).json(updateProduct);
  } catch (error) {
    res.status(400).json(error);
  }
};

module.exports = productCtrl;
