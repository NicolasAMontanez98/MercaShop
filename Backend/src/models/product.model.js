const { Schema, model } = require("mongoose");

const productSchema = new Schema({
    id: {
        type: Number,
        required: true,
        trim: true
    },
    image: {
        type: String,
        required: true,
        trim: true
    },
    name: {
        type: String,
        required: true
    },
    decription: {
        type: String,
        required: true
    },
    category: {

        type: String,
        required: true
    },
    quantity: {
        type: String,
        required: true
    },
    discount: {
        type: Number,
        required: true
    },
    price: {
        type: Number,
        required: true
    }
},{timestamps: true});

const Product = model('Product', productSchema);
module.exports = Product;
