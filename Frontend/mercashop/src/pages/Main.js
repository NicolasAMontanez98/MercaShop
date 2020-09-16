import React from "react";
import PromotionCarousel from "./../components/PromotionsCarousel";
import ShowProducts from "./../components/ShowProducts";
import SideMenu from '../shared/SideMenu';
import { BrowserRouter as Router } from "react-router-dom";

function Main(props) {
  return (
    <div className="row">
      <div className="col-md-12 vh-100 overflow-auto">
        <div className="d-flex justify-content-center">
          <div className="mx-auto container">
            <div className="row">
              <div className="col-md-12 mb-4 d-flex justify-content-center">
                <PromotionCarousel />
              </div>
            </div>
            <div className="row ml-5">
              <div className="col-md-12">
                <ShowProducts category={props.category} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
