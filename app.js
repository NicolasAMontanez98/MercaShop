require("dotenv").config();
const app = require("./app");
require("./database");
const { create } = require('./controllers/product.controller');

app.post('/products', create);

app.listen(app.get('port'), () => console.log('App listening on port ', app.get('port')));

