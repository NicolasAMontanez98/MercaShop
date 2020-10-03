import React, { useEffect, useState } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import { updateProduct } from "../store/actions/productAction";
import { useSelector, useDispatch } from "react-redux"; // No ha sido utilizado/

export default function ProductsProfileProvider() {
  const dispatch = useDispatch();
  const [products, setProducts] = useState([]);
  const [productId, setProductId] = useState("");
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [decription, setDecription] = useState("");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState(0);

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

  const handleUpdateProduct = (e) => {
    e.preventDefault();
    dispatch(
      updateProduct(productId, {
        name,
        image,
        decription,
        quantity,
        price,
      })
    );
  };

  return (
    <div className="overflow-auto">
      {products.map((product) => {
        return (
          <div className="card mx-1 my-2" key={product._id}>
            <div className="card mx-1 my-1">
              <div className="row no-gutters">
                <div className="col-md-2 my-2 d-flex justify-content-center">
                  <img
                    src={product.image}
                    alt={product.name}
                    width="100"
                    height="100"
                  />
                </div>
                <div className="col-md-10 mt-2">
                  <div className="row">
                    <div className="col-md-10">
                      <div className="row">
                        <div className="col">
                          <h4 className="card-title font-weight-bolder">
                            {product.name}
                            <span
                              className="badge badge-pill badge-danger ml-2"
                              hidden={product.discount === 0}
                            >
                              {product.discount}%
                            </span>
                          </h4>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-3">
                          <div className="row">
                            <div className="col-md-12">
                              <div className="card-description">
                                <strong>Cantidad: </strong>
                                {product.quantity}
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-5">
                          <div className="row">
                            <div className="col-md-12">
                              <p className="card-description">
                                <strong>Descripción: </strong>
                                {product.decription}
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-2">
                          <h5 className="card-description font-weight-bold">
                            Precio: ${formatCurrency(product.price)}
                          </h5>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-2">
                      <div>
                        <div className="row px-2 py-2">
                          <div className="col">
                            <button
                              type="button"
                              class="btn btn-success btn-block"
                            >
                              <FontAwesomeIcon icon={faEdit} />
                            </button>
                          </div>
                        </div>
                        <div className="row px-2 py-2">
                          <div className="col">
                            <button
                              type="button"
                              class="btn btn-danger btn-block"
                            >
                              <FontAwesomeIcon icon={faTrash} />
                            </button>
                          </div>
                        </div>
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
