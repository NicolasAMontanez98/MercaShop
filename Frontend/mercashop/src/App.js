import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Login from "./pages/login";
import Header from './shared/Header'
import RegisterCostumer from "./pages/RegisterCostumer";
import RegisterProvider from "./pages/RegisterProvider";
import Home from "./shared/Home";
import Switch from "react-bootstrap/esm/Switch";

function App() {
  return (
    <Router>
      <Header/>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/registro-cliente" component={RegisterCostumer} />
        <Route exact path="/registro-proveedor" component={RegisterProvider} />
      </Switch>
    </Router>
  );
}

export default App;
