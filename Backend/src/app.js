const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const { formData } = require('./utils/middlewares');

const app = express();

// settings
app.set('port', process.env.PORT || 8000);

// middlewares
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

// routes
app.use('/api/customer', require('./routes/customer'));
app.use('/api/provider', require('./routes/provider'));
app.use('/api/product', require('./routes/product'));
app.use('/api/order', require('./routes/order'));

app.post('/api/image', formData, (req, res) => {
  // console.log(req.body);
  const url = req.body.file.secure_url;
  // const urls = req.body.file;
  console.log(url);
  res.status(200).json(url);
})

module.exports = app;