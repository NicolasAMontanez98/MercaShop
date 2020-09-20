import React, { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import { listProducts } from "../store/actions/productAction";
import ProductsCard from "./ProductsCard";

function ShowProducts(props) {
  const productList = useSelector((state) => state.productList);
  const category = props.category;
  const search = props.search;
  const { products, loading, error } = productList;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listProducts(category, search));
  }, [category]);

  const product = () => {
    return (
        <>
          {products.map((product) => {
            return <ProductsCard product={product} key={product._id} />;
          })}
        </>
    );
  };
  return loading ? (
    <div>Cargando...</div>
  ) : error ? (
    <div>{error}</div>
  ) : (
    <div className="container">
      <div className="row d-flex justify-content-center">
        {product()}
      </div>
    </div>
  );
}

export default ShowProducts;
