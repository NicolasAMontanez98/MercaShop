import React from "react";
import productsList from "./../assets/json/products.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

class ShowProducts extends React.Component {
  constructor() {
    super();
    this.state = {
      productsList,
    };
  }

  printProductos = (e) => {
    const product = productsList.list;
    product.map(({ category, discount, products }) => {
      console.log(category, discount, products);
    });
  };

  render() {
    const product = this.state.productsList.list.map(
      ({ category, discount, products }) => {
        return (
          <div className="mt-2">
            <h2>{category}</h2>
            <div className="row row-cols-md-4">
              {products.map(({ image, name, description, quantity, price }) => {
                return (
                  <div className="card mt-4 mr-2" style={{ width: "18rem" }}>
                    <div className="card-header">
                      <img className="card-img-top" src={image} />                      
                    </div>
                    <div className="card-body">
                      <h6 className="card-title"><span class="badge badge-pill badge-danger" hidden={discount==0}>{discount}%</span> {name}</h6>
                      <p className="font-weight-light">{quantity}</p>
                      <h4>$ {price}</h4>
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
                );
              })}
            </div>
          </div>
        );
      }
    );
    return (
      <div className="row">
        <div className="col-md-12">{product}</div>
      </div>
    );
  }
}

export default ShowProducts;
