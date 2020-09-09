const customerCtrl = {};

const Customer = require("../models/customer.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

customerCtrl.checkInCustomer = async (req, res) => {
  try {
    const {
      names,
      lastNames,
      idType,
      idNumber,
      email,
      phone,
      birthDate,
      adress,
      userName,
      password,
    } = req.body;
    const encryptedPassword = await bcrypt.hash(password, 8);
    const newCostumer = new Customer({
      names,
      lastNames,
      idType,
      idNumber,
      email,
      phone,
      birthDate,
      adress,
      userName,
      password: encryptedPassword,
    });
    await newCostumer.save();
    const token = jwt.sign({ id: newCostumer._id }, process.env.SECRET);
    res.status(200).json({ 
      _id: newCostumer._id,
      names: newCostumer.names,
      email: newCostumer.email,
      token
     });
  } catch (error) {
    res.status(400).json(error);
  }
};

customerCtrl.updateCustomer = async (req, res) => {
  try {
    const {
      names,
      lastNames,
      idType,
      idNumber,
      email,
      phone,
      birthDate,
      adress,
      userName,
    } = req.body;
    const id = req.params.id;
    const customer = await Customer.findById(id);
    if (customer) {
      customer.names = names || customer.names;
      customer.lastNames = lastNames || customer.lastNames;
      customer.idType = idType || customer.idType;
      customer.idNumber = idNumber || customer.idNumber;
      customer.email = email || customer.email;
      customer.phone = phone || customer.phone;
      customer.birthDate = birthDate || customer.birthDate;
      customer.adress = adress || customer.adress;
      customer.userName = userName || customer.userName;
      const updateCustomer = await customer.save();
      res.status(200).json({ 
      _id: updateCustomer._id,
      names: updateCustomer.names,
      lastNames: updateCustomer.lastNames,
      idType: updateCustomer.idType,
      idNumber:updateCustomer.idNumber,
      email: updateCustomer.email,
      phone: updateCustomer.phone,
      birthDate: updateCustomer.birthDate,
      adress: updateCustomer.adress,
      userName: updateCustomer.userName,
      token = jwt.sign({ id: newCostumer._id }, process.env.SECRET);
     });
    } else {
      res.status(404).json({ message:'Cliente no encontrado' });
    }
  } catch (error) {
    res.status(400).json(error);
  }
};

customerCtrl.logInCustomer = async (req, res) => {
  try {
    const { email, password } = req.body;
    const customer = await Customer.findOne({ email });
    if (!customer) {
      throw Error("El cliente no existe.");
    }
    const isValid = bcrypt.compare(password, customer.password);
    if (!isValid) {
      throw Error("La contraseña es incorrecta.");
    }
    const token = jwt.sign({ id: customer._id }, process.env.SECRET);
    res.status(200).json({ 
      _id: customer._id,
      names: customer.names,
      email: customer.email,
      token
    });
  } catch (error) {
    res.status(400).json(error);
  }
};

customerCtrl.getCustomer = async (req, res) => {
  try {
    const customer = await Customer.findById(req.params.id);
    res.status(200).json(customer);
  } catch (error) {
    res.status(400).json(error);
  }
};

customerCtrl.getCustomers = async (req, res) => {
  try {
    const customers = await Customer.find();
    res.status(200).json(customers);
  } catch (error) {
    res.status(400).json(error);
  }
};

customerCtrl.deleteCustomer = async (req, res) => {
  try {
    Customer.findByIdAndDelete(req.params.id);
    res.status(200).json("Cliente borrado.");
  } catch (error) {
    res.status(400).json(error);
  }
};

module.exports = customerCtrl;