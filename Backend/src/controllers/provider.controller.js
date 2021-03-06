const providerCtrl = {};

const Provider = require("../models/provider.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

providerCtrl.checkInProvider = async (req, res) => {
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
      businessName,
      nit,
      commerceType,
      webPage,
      password,
    } = req.body;
    const encryptedPassword = await bcrypt.hash(password, 8);
    const newProvider = new Provider({
      names,
      lastNames,
      idType,
      idNumber,
      email,
      phone,
      birthDate,
      adress,
      businessName,
      nit,
      commerceType,
      webPage,
      password: encryptedPassword,
    });
    await newProvider.save();
    const token = jwt.sign({ id: newProvider._id }, process.env.SECRET);
    res.status(200).json({
      _id: newProvider._id,
      names: newProvider.names,
      email: newProvider.email,
      businessName: newProvider.businessName,
      token,
    });
  } catch (error) {
    res.status(400).json(error);
  }
};

providerCtrl.logInProvider = async (req, res) => {
  try {
    const { email, password } = req.body;
    const provider = await Provider.findOne({ email });

    if (!provider) {
      throw Error("El proveedor no exite.");
    }
    const isValid = await bcrypt.compare(password, provider.password);
    if (!isValid) {
      throw Error("La contraseña es incorrecta.");
    }
    const token = jwt.sign({ id: provider._id }, process.env.SECRET);
    res.status(200).json({
      _id: provider._id,
      names: provider.names,
      email: provider.email,
      businessName: provider.businessName,
      token,
    });
  } catch (error) {
    res.status(400).json(error);
  }
};

providerCtrl.getProviders = async (req, res) => {
  try {
    const providers = await Provider.find();
    res.status(200).json(providers);
  } catch (error) {
    res.status(400).json(error);
  }
};

providerCtrl.deleteProvider = async (req, res) => {
  try {
    Provider.findByIdAndDelete(req.params.id);
    res.status(200).json("Proveedor borrado.");
  } catch (error) {
    res.status(400).json(error);
  }
};

providerCtrl.getProvider = async (req, res) => {
  try {
    const provider = await Provider.findById(req.params.id);
    res.status(200).json(provider);
  } catch (error) {
    res.status(400).json(error);
  }
};

module.exports = providerCtrl;
