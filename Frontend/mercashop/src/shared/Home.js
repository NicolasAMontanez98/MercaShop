import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Main from "./../pages/Main";
import SideMenu from "./SideMenu";
import Footer from "./Footer";
import Header from "./Header";

function Home(props) {
  const category = props.match.params.id ? props.match.params.id : '';

  return (
    <Router forceRefresh={true}>
      <Header />
      <div className="row">
        <div className="col-md-3 bg-white border-right">
          <SideMenu />
        </div>
        <div className="col-md-9 vh-100 overflow-auto">
          <Main category={category}/>
          {/* <Switch> */}
            {/* <Route exact path="/" component={Main} /> */}
            {/* <Route exact path="/category/:id" component={Main} /> */}
          {/* </Switch> */}
        </div>
      </div>
      <Footer />
    </Router>
  );
}

export default Home;
