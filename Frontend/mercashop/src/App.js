import React, { Component } from "react";
import logo from "./logo.svg";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Login from "./pages/login";
import Main from "./pages/Main";
import RegisterCostumer from "./pages/RegisterCostumer";
import RegisterProvider from "./pages/RegisterProvider";
import Home from "./shared/Home";
import Switch from "react-bootstrap/esm/Switch";

function App() {
  return (
    <Router>
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
