const { Schema, model } = require("mongoose");

const productSchema = new Schema({
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
    },
    rating: {
        type: Number,
        default: 0,
        required: true
    },
    numReviews: {
        type: Number,
        default: 0,
        required: true
    },
    // provider: {
    //     type: Schema.Types.ObjectId,
    //     ref: 'Provider',
    //     required: true
    // }
},{timestamps: true});

const Product = model('Product', productSchema);
module.exports = Product;
