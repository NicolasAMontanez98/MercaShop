import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { useSelector, useDispatch } from 'react-redux';
import { listProducts } from '../store/actions/productAction';

function ShowProducts() {

  const productList = useSelector(state => state.productList);
  const { products, loading, error } = productList;
  console.log(productList);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listProducts());

    return () => {
      //
    };
  }, [])

  const product = products.map(
    (product) => {
      return (
        <div className="mt-2" key={product._id} >
          {/* <h2>{product.category}</h2> */}
          <div className="row row-cols-md-4">
            <div className="card mt-4 mr-2" style={{ width: "18rem" }} >
              <div className="card-header">
                <Link to={'/product/' + product._id}>
                  <img className="card-img-top" src={product.image} alt={product.name}/>   
                </Link>                     
              </div>
              <div className="card-body">
                {/* <h6 className="card-title"><span className="badge badge-pill badge-danger" hidden={product.discount===0}>{product.discount}%</span> {product.name}</h6> */}
                <Link to={'/product/' + product._id} className="card-title">
                  <span className="badge badge-pill badge-danger" hidden={product.discount == 0}>{product.discount}%</span> {product.name}
                </Link>
                <p className="font-weight-light">{product.quantity}</p>
                <h4>$ {product.price}</h4>
                <div className="sticky-top">
                  <button className="btn btn-outline-primary btn-sm rounded-pill">
                    <FontAwesomeIcon
                      className="mr-2"
                      icon={faShoppingCart}
                    />
                    Agregar
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
  )

  return (
    loading ? <div>Cargando...</div> : 
    error ? <div>{error}</div> :
    <div className="row">
      <div className="col-md-12">{product}</div>
    </div>
  );
}

export default ShowProducts;
