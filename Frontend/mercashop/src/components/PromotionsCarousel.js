import React from "react";
import bannerLacteos from "./../assets/banners/bannerLacteos.png";
import bannerLicores from "./../assets/banners/bannerLicores.png";
import bannerMascotas from "./../assets/banners/bannerMascotas.png";
import bannerPanaderia from "./../assets/banners/bannerPanaderia.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleLeft } from "@fortawesome/free-solid-svg-icons";
import { faArrowCircleRight } from "@fortawesome/free-solid-svg-icons";

function PromotionCarousel() {
  return (
    <div className="border bg-white mt-2 w-75">
      <div
        id="carouselExampleIndicators"
        className="carousel slide carousel-fade w-100"
        data-ride="carousel"
      >
        <ol className="carousel-indicators">
          <li
            data-target="#carouselExampleIndicators"
            data-slide-to="0"
            className="active"
          ></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={bannerLacteos} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={bannerLicores} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={bannerMascotas} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={bannerPanaderia} className="d-block w-100" alt="..." />
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="prev"
        >
          {/* <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span> */}
          <FontAwesomeIcon icon={faArrowCircleLeft} className="fa-3x" aria-hidden="true"/>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="next"
        >
          {/* <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span> */}
          <FontAwesomeIcon icon={faArrowCircleRight} className="fa-3x" aria-hidden="true"/>
          <span className="sr-only bg-dark">Next</span>
        </a>
      </div>
    </div>
  );
}

export default PromotionCarousel;
