const { Schema, model } = require("mongoose");

const orderSchema = new Schema(
  {
    customer: {
      type: Schema.Types.ObjectId,
      ref: "Customer",
      required: true,
    },
    orderItems: {
      type: Schema.Types.ObjectId,
      ref: 'OrderItems',
      required: true,
    },
    shipping: {
      type: Schema.Types.ObjectId,
      ref: 'Shipping',
      required: true,
    },
    payment: {
      type: Schema.Types.ObjectId,
      ref: 'Payment',
      required: true,
    },
    itemsPrice: {
      type: Number,
    },
    taxPrice: {
      type: Number,
    },
    shippingPrice: {
      type: Number,
    },
    totalPrice: {
      type: Number,
    },
    isPaid: {
      type: Boolean,
      default: false,
    },
    paidAt: {
      type: Date,
    },
    isDelivered: {
      type: Boolean,
      default: false,
    },
    deliveredAt: {
      type: Date,
    },
  },
  { timestamps: true }
);

const Order = model('Order', orderSchema);
module.exports = Order;
