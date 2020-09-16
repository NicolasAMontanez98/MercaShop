import React, { useEffect, useState } from "react";
import axios from "axios";

export default function ordersProfile({order}) {

  return (
    <div>
      <div className="card">
        <div className="card-header bg-white">
          <h5 className="card-title mt-1">Orden #1</h5>
        </div>
        <div className="card-body">
          <h6 className="card-title">Productos</h6>
          <div className="card">
            <div className="row no-gutters">
              <div className="col-md-2 d-flex justify-content-center">
                <img
                  src="https://d50xhnwqnrbqk.cloudfront.net/images/products/app/huevo-rojo-aa-x-30-unidades.png"
                  alt="algun producto"
                  width="100"
                  height="100"
                />
              </div>
              <div className="col-md-10">
                <h6 className="card-title font-weight-bolder">
                  Nombre del producto
                </h6>
                <p className="card-description">Cantidad: 2</p>
                <p className="card-description font-weight-bold">
                  Precio: $10.980
                </p>
              </div>
            </div>
          </div>
          <h6 className="card-title mt-1">
            Dirección de envío: Carrera 9 #12 - 32
          </h6>
          <h6 className="card-title">Metodo de pago: Tarjeta de credito</h6>
          <h5 className="card-title">Precio Total: $21.860</h5>
        </div>
      </div>
    </div>
  );
}
