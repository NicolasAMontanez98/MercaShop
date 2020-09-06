import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
// import productsList from "./../assets/json/products.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { useSelector, useDispatch } from 'react-redux';
import { detailsProduct } from '../store/actions/productAction';

function ProductDetail(props) {
  const [qty, setQty] = useState(1);
  const productDetails = useSelector(state => state.productDetails);
  const {product, loading, error} = productDetails;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(detailsProduct(props.match.params.id));
    return () => {
      //
    };
  }, []);

  const handleAddToCart = () => {
    props.history.push("/cart/" + props.match.params.id + "?qty=" + qty)
  }

  return (
    <div>
      <div className="back-to-result">
        <Link to="/">Volver</Link>
      </div>
      {loading ? <div>Cargando...</div> :
      error ? <div>{error}</div> :
      (
        <div className="details">
        <div className="details-image">
          <img src={product.image} alt="product"></img>
        </div>
        <div className="details-info">
          <ul>
            <li><h4>{product.name}</h4></li>
            <li>
              {product.rating} Estrellas ({product.numReviews} Calificaciones)
            </li>
            {/* <li><b>{product.price}</b></li> */}
            <li>
              Descripción:
              <div>{product.description}</div>
            </li>
          </ul>
        </div>
        <div className="details-action">
          <ul>
            <li>Precio: <b>$ {product.price}</b></li>
            <li>
              Estado: {product.qtyInStock > 0 ? "Disponible" : "Agotado"}
            </li>
            <li>
              Cantidad: <select value={qty} onChange={(e) => {setQty(e.target.value)}}>
                {[...Array(product.qtyInStock).keys()].map(x =>
                  <option key={x + 1} value={x + 1}>{x + 1}</option>
                )}
              </select>
            </li>
            <li>
              {product.qtyInStock > 0 &&
                <button onClick={handleAddToCart} className="btn btn-outline-primary btn-sm rounded-pill">
                  <FontAwesomeIcon
                    className="mr-2"
                    icon={faShoppingCart}
                  />
                  Agregar al Carro
                </button>
              }  
            </li>
          </ul>
        </div>
      </div>
      )
      } 
      
    </div>
  ); 
}

export default ProductDetail;