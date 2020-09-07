import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Main from "./../pages/Main";
import SideMenu from "./SideMenu";
import Footer from "./Footer";
import Header from './Header';
import RegisterCostumer from '../pages/RegisterCostumer';
import RegisterProvider from '../pages/RegisterProvider';
import ProductDetail from "../pages/ProductDetail";
import Cart from '../pages/Cart';

function Home(props) {
  return (
    <Router>
      <Header />
      <div className="row">
        {/* <div className="col-md-3 bg-light border-right border-dark">
          <SideMenu />
        </div> */}
        <div className="col-md-12 vh-100 overflow-auto">
          <Redirect from="/" to="/home" />
          <Switch>
            <Route exact path="/home" component={Main} />
            <Route exact path="/category/:id" component={Main} />
            <Route
              exact
              path="/registro-cliente"
              component={RegisterCostumer}
            />
            <Route
              exact
              path="/registro-proveedor"
              component={RegisterProvider}
            />
            <Route exact path="/product/:id" component={ProductDetail} />
            <Route exact path="/cart/:id?" component={Cart} />
          </Switch>
        </div>
    </div>
    <Footer />
  </Router>
  );
}

export default Home;
