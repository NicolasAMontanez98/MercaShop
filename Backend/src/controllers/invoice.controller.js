invoiceCtrl = {};

const Invoice = require("../models/invoice.model");
const { transporter, placeOrder, verify } = require("../utils/mailer");

invoiceCtrl.postInvoice = async (req, res) => {
  try {
    const newInvoice = new Invoice({
      customer: req.body.customer,
      products: req.body.products,
      adress: req.body.adress,
      city: req.body.city,
      payment: req.body.payment,
      itemsPrice: req.body.itemsPrice,
      taxPrice: req.body.taxPrice,
      shippingPrice: req.body.shippingPrice,
      totalPrice: req.body.totalPrice,
      numberInvoice: req.body.numberInvoice,
      paidAt: req.body.paidAt,
      status: req.body.status,
      isDelivered: req.body.isDelivered,
      deliveredAt: req.body.deliveredAt,
    });
    const newInvoiceCreated = await newInvoice.save();
    const mail = {
      from: `"${process.env.MAIL_USERNAME}" <${process.env.MAIL_USER}>`,
      to: email,
      subject: "Bienvenido a MercaShop 😄",
      ...placeOrder(
        newInvoiceCreated.names,
        newInvoiceCreated.id,
        newInvoiceCreated.email,
        newInvoiceCreated.date,
        newInvoiceCreated.city,
        newInvoiceCreated.address,
        newInvoiceCreated.products,
        newInvoiceCreated.payment,
        newInvoiceCreated.itemsPrice,
        newInvoiceCreated.taxPrice,
        newInvoiceCreated.shippingPrice,
        newInvoiceCreated.totalPrice.
      ),
    };
    await transporter.sendMail(mail);
    res
      .status(200)
      .send({ message: "New Invoice created", data: newInvoiceCreated });
  } catch (error) {
    res.status(400).json(error);
  }
};

invoiceCtrl.getInvoicesById = async (req, res) => {
  try {
    const invoices = await Invoice.find(
      { customer: req.params.id }.populate("customer")
    );
    res.send(invoices);
  } catch (error) {
    res.status(400).json(error);
  }
};

invoiceCtrl.getInvoices = async (req, res) => {
  try {
    const invoices = await Invoice.find({}).populate("customer");
    res.send(invoices);
  } catch (error) {
    res.status(400).json(error);
  }
};

module.exports = invoiceCtrl;
