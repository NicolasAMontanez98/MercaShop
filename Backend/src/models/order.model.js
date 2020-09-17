const mongoose = require("mongoose");
const { Schema, model } = mongoose;
const autoIncrement = require("mongoose-auto-increment");

autoIncrement.initialize(mongoose.connection);

const orderSchema = new Schema(
  {
    customer: {
      type: Schema.Types.ObjectId,
      ref: "Customer",
      required: true,
    },
    orderItems: [{
      type: Schema.Types.ObjectId,
      ref: 'OrderItems',
      required: true,
    }],
    adress: {
      type: String,
    },
    city: {
      type: String,
    },
    payment: {
      type: String,
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
    numberInvoice: {
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

orderSchema.plugin(autoIncrement.plugin, {
  model: 'Order',
  field: 'invoice'
})

const Order = model('Order', orderSchema);
module.exports = Order;
