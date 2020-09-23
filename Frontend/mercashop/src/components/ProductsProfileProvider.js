import React, { useEffect, useState } from "react";
import axios from "axios";

export default function ProductsProfileProvider() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get(process.env.REACT_APP_SERVER_URL + "product/")
      .then(({ data }) => {
        setProducts(data);
      })
      .catch((err) => console.log(err));
  }, []);

  const formatCurrency = (number) => {
    let res = new Intl.NumberFormat("en-CO").format(number);
    return res;
  };

  return (
    <div className="overflow-auto">
      {products.map((product) => {
        return (
          <div className="card mx-1 my-2" key={product._id}>
            <div className="card-body">
              <div className="card mx-1 my-1">
                <div className="row no-gutters">
                  <div className="col-md-2 d-flex justify-content-center">
                    <img
                      src={product.image}
                      alt={product.name}
                      width="100"
                      height="100"
                    />
                  </div>
                  <div className="col-md-10">
                    <h5 className="card-title font-weight-bolder">
                      {product.name}
                      <span
                        className="badge badge-pill badge-danger ml-2"
                        hidden={product.discount === 0}
                      >
                        {product.discount}%
                      </span>
                    </h5>
                    <div className="row">
                      <div className="col-md-5">
                        <div className="row">
                          <div className="col-md-4">
                            <div className="card-description font-weight-bold">
                              Cantidad:
                            </div>
                          </div>
                          <div className="col-md-8">
                            <p className="card-description">
                              {product.quantity}
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-5">
                        <div className="row">
                          <div className="col-md-5">
                            <p className="card-description font-weight-bold">
                              Descripción:
                            </p>
                          </div>
                          <div className="col-md-7">
                            <p className="card-description">
                              {product.decription}
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-2">
                        <p className="card-description font-weight-bold">
                          Precio:   ${formatCurrency(product.price)}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
