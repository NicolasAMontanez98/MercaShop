import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingCart,
  faArrowCircleLeft,
} from "@fortawesome/free-solid-svg-icons";
import { useSelector, useDispatch } from "react-redux";
import { detailsProduct } from "../store/actions/productAction";
import { addToCart } from "../store/actions/cartAction";

function ProductDetail(props) {
  const [qty, setQty] = useState(1);
  const productDetails = useSelector((state) => state.productDetails);
  const { product, loading, error } = productDetails;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(detailsProduct(props.match.params.id));
    return () => {
      //
    };
  }, []);

  const handleAddToCart = () => {
    dispatch(addToCart(props.match.params.id, qty));
    props.history.push("/cart/" + props.match.params.id + "?qty=" + qty);
  };

  return (
    <div className="justify-content-center">
      <div className="card mx-5 my-5">
        <div className="card-header bg-white border-bottom text-left">
          <div className="Row">
            <div className="col">
              <Link to="/">
                <FontAwesomeIcon icon={faArrowCircleLeft} className="fa-3x" />
              </Link>
            </div>
          </div>
        </div>
        <div className="card-body bg-white border-bottom-0 text-center">
          {loading ? (
            <div>Cargando...</div>
          ) : error ? (
            <div>{error}</div>
          ) : (
            <div className="row no-gutters">
              <div className="col-md-4 border">
                <img src={product.image} alt={product.title} weight="210" height="210"></img>
              </div>
              <div className="col-md-8 border text-left">
                <p className="mt-2 ml-2">
                  <h4>{product.name}</h4>
                </p>
                <p className="ml-2">
                  Descripción:
                  <div>{product.decription}</div>
                </p>
                <div className="details-action ml-2">
                  <p>
                    Precio: <b>$ {product.price}</b>
                  </p>
                  <p>
                    Cantidad:{" "}
                    <select
                      value={qty}
                      onChange={(e) => {
                        setQty(e.target.value);
                      }}
                    >
                      {/* {[...Array(product.qtyInStock).keys()].map(x =>
                  <option key={x + 1} value={x + 1}>{x + 1}</option>
                )} */}
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                    </select>
                  </p>
                  <p>
                    <button
                      onClick={handleAddToCart}
                      className="btn btn-primary btn-sm rounded-pill"
                    >
                      <FontAwesomeIcon className="mr-2" icon={faShoppingCart} />
                      Agregar al Carro
                    </button>
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
