import React from "react";
import PromotionCarousel from "./../components/PromotionsCarousel";
import ShowProducts from "./../components/ShowProducts";

class Main extends React.Component {
  render() {
    return (
      <div className="d-flex justify-content-center">
        <div className="mx-auto">
          <div className="row ml-5">
            <div className="col-md-12 mb-4">
              <PromotionCarousel />
            </div>
          </div>
          <div className="row ml-5">
            <div className="col-md-12">
              <ShowProducts />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
