import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const ProductsCard = ({ product }) => {
  const { image, name, index, discount, quantity, price } = product;
  return (
    <div className="container col-3">
      <div className="card mt-4 mr-2 p-3" key={index}>
        <div className="card-header bg-white">
          <img className="card-img-top" src={image} alt={name} />
        </div>
        <div className="card-body p-1 text-center">
          <span
            className="badge badge-pill badge-danger"
            hidden={discount === 0}
          >
            {discount}%
          </span>{" "}
          <div className="card-title">
            <strong>{name}</strong>
          </div>
          <p className="font-weight-light">{quantity}</p>
          <h4>$ {price}</h4>
          <div className="sticky-top">
            <button className="btn btn-outline-primary btn-sm rounded-pill  ">
              <FontAwesomeIcon className="mr-2" icon={faShoppingCart} />
              Agregar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsCard;
