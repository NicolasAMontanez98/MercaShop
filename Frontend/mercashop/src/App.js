import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css"

import Login from "./pages/login";
import LoginProvider from "./pages/loginProvider";
import RegisterCostumer from "./pages/RegisterCostumer";
import RegisterProvider from "./pages/RegisterProvider";
import Home from "./shared/Home";
import ProductDetail from "./pages/ProductDetail";
import Switch from "react-bootstrap/esm/Switch";
import Cart from './pages/Cart';
import Main from './pages/Main';

function App() {
  return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/login-proveedor" component={LoginProvider} />
          <Route exact path="/registro-cliente" component={RegisterCostumer}/>
          <Route exact path="/registro-proveedor" component={RegisterProvider}/>
          <Route exact path="/product/:id" component={ProductDetail} />
          <Route exact path="/cart/:id?" component={Cart} />
          <Route exact path="/category/:id" component={Home} />
        </Switch>
      </Router>
  );
}

export default App;
