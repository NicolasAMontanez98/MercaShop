import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';
// import { useDispatch } from 'react-redux';
// import { addToCart } from '../store/actions/cartAction';

const ProductsCard = ({ product }) => {
  
  const { image, name, index, discount, quantity, price, _id } = product;

  // const [qty, setQty] = useState(1);
  // const qty = 1;
  // const dispatch = useDispatch();
  // const handleAddToCart = () => {
  //   dispatch(addToCart(_id, qty));
    // props.history.push("/cart/" + _id)
  // }

  return (
    <div className="container col-3">
      <div className="card mt-4 mr-2 p-3" key={index}>
        <div className="card-header bg-white">
          <Link to={'/product/' + _id}>
            <img className="card-img-top" src={image} alt={name} />
          </Link>
        </div>
        <div className="card-body p-1 text-center">
          <span
            className="badge badge-pill badge-danger"
            hidden={discount === 0}
          >
            {discount}%
          </span>{" "}
          <div className="card-title">
            <Link to={'/product/' + _id} >
              <strong>{name}</strong>
            </Link>
          </div>
          <p className="font-weight-light">{quantity}</p>
          <h4>$ {price}</h4>
          <div className="sticky-top">
            {/* <button className="btn btn-outline-primary btn-sm rounded-pill  " onClick={handleAddToCart}> */}
            <button className="btn btn-outline-primary btn-sm rounded-pill  " >
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
