const orderCtrl = {};

const Order = require("../models/order.model");

orderCtrl.getOrders = async (req, res) => {
    try {
        const orders = await Order.find({}).populate('customer');
        res.send(orders);
    } catch (error) {
        res.status(400).json(error);
    }
};

orderCtrl.getOrder = async (req, res) => {
    try {
        const order = await Order.findOne({ _id: req.params.id});
        res.status(200).json(order);            
    } catch (error) {
        res.status(400).json(error);
    }
};

orderCtrl.deleteOrder = async (req, res) => {
    try {
        const order = await Order.findOne({_id: req.params.id});
        const deletedOrder = await order.remove();
        res.status(200).json(deletedOrder);
    } catch (error) {
        res.status(400).json(error);
    }
};

orderCtrl.postOrder = async (req, res) => {
    try {
        const newOrder = new Order({
            customer: req.body._id,
            orderItems: req.body.orderItems,
            shipping: req.body.shipping,
            payment: req.body.payment,
            itemsPrice: req.body.itemsPrice,
            taxPrice: req.body.taxPrice,
            shippingPrice: req.body.shippingPrice,
            totalPrice: req.body.totalPrice,
        });
        const newOrderCreated = await newOrder.save();
        res.status(200).json({ message: 'Orden agregada.'});
    } catch (error) {
        res.status(400).json(error);
    }
};

orderCtrl.payOrder = async (req, res) => {
    try {
        const order = await Order.findById(req.params.id);
        if (order) {
            order.isPaid = true;
            order.paidAt = Date.now();
            order.payment = {
                paymentMethod: 'paypal',
                paymentResult: {
                    payerId: req.params.payerId,
                    orderId: req.params.orderId,
                    paymentId, req.params.paymentId
                }
            }
        } else {
            res.status(404).json({ message: 'Orden no encontrada.'})
        }
        const updatedOrder = await order.save();
        res.status(200).json({ message: 'Orden pagada', order: updatedOrder });
    } catch (error) {
        res.status(400).json(error);
    }
};

module.exports = orderCtrl;