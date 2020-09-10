const express = require('express');
const cors = require('cors');

const app = express();

// settings
app.set('port', process.env.PORT || 8000);

// middlewares
app.use(cors());
app.use(express.json());

// routes
app.use('/api/customer', require('./routes/customer'));
app.use('/api/provider', require('./routes/provider'));
app.use('/api/product', require('./routes/product'));
app.use('/api/order', require('./routes/order'));

module.exports = app;