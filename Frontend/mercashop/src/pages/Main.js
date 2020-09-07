import React from "react";
import PromotionCarousel from "./../components/PromotionsCarousel";
import ShowProducts from "./../components/ShowProducts";
import SideMenu from '../shared/SideMenu';

function Main(props) {
  const category = props.match.params.id ? props.match.params.id : '';

  return (
    <div className="row">
      <div className="col-md-3 bg-light border-right border-dark">
        <SideMenu />
      </div>
      <div className="col-md-9 vh-100 overflow-auto">
        <div className="d-flex justify-content-center">
          <div className="mx-auto">
            <div className="row ml-5">
              <div className="col-md-12 mb-4">
                <PromotionCarousel />
              </div>
            </div>
            <div className="row ml-5">
              <div className="col-md-12">
                <ShowProducts category={category} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
