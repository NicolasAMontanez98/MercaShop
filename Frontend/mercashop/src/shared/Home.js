import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Main from "./../pages/Main";
import SideMenu from "./SideMenu";
import Footer from "./Footer";

function Home() {
  return (
    <Router forceRefresh={true}>
    <div className="row">
      <div className="col-md-3 bg-white border-right">
        <SideMenu />
      </div>
      <div className="col-md-9 vh-100 overflow-auto">
        <Switch>
          <Route exact path="/" component={Main} />
        </Switch>
      </div>
    </div>
    <Footer />
  </Router>
  );
}

export default Home;
