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

function Home() {
  return (
    <Router>
      <Header />
      <div className="row">
        <div className="col-md-3 bg-light border-right border-dark">
          <SideMenu />
        </div>
        <div className="col-md-9 vh-100 overflow-auto">
          <Redirect from="/" to="/home" />
          <Switch>
            <Route exact path="/home" component={Main} />
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
          </Switch>
        </div>
    </div>
    <Footer />
  </Router>
  );
}

export default Home;
