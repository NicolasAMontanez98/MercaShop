import React from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import Main from "./../pages/Main";
import RegisterCostumer from "./../pages/RegisterCostumer";
import RegisterProvider from "./../pages/RegisterProvider";

import Header from "./Header";
import SideMenu from "./SideMenu";
import Footer from "./Footer";

function Home() {
  return (
    <Router>
      <Header />
      <div className="row">
        <div className="col-md-3 bg-light border-right border-dark">
          <SideMenu/>
        </div>
        <div className="col-md-9 vh-100 overflow-auto">
        <switch>
          <Redirect from="/" to="/home"/>
          <Route exact path="/home" component={ Main }/>
          <Route exact path="/registro-cliente" component={ RegisterCostumer }/>
          <Route exact path="/registro-proveedor" component={ RegisterProvider }/>
        </switch>
        </div>
      </div>
      <Footer />
    </Router>
  );
}

export default Home;