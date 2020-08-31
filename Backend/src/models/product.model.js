const { Schema, model } = require("mongoose");

const productSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    urlImage: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true
    },
    quantity: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    }
},{timestamps: true});

const Product = model('Product', productSchema);
module.exports = Product;
