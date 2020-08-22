const Product = require("./../models/product.model");

module.exports = {
  create(req, res) {
      const data = req.body;
      
      Product
        .create(data)
        .then((product) => res.status(200).json(product))
        .catch((err) => res.status(400).json(err)); 
  },
};
