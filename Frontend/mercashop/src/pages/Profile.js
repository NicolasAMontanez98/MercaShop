import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowCircleLeft,
  faCaretSquareDown,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import axios from 'axios';

export default function Profile(props) {
  const customerRegister = useSelector((state) => state.customerRegister);
  const { customerInfo } = customerRegister;
  const dispatch = useDispatch();
  const [names, setNames] = useState("");
  const [lastNames, setLastNames] = useState("");
  const [idType, setIdType] = useState("");
  const [idNumber, setIdNumber] = useState(0);
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState(0);
  const [birthDate, setBirthDate] = useState("");
  const [adress, setAdress] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [customer, setCustomer] = useState({});
  
  return (
    <div className="container">
      <div className="card mx-2 my-2">
        <div className="card-header bg-white">
          <div className="row">
            <div className="col">
              <Link to="/" className="text-decoration-none text-dark">
                <FontAwesomeIcon
                  className="fa-3x ml-2 mt-2"
                  icon={faArrowCircleLeft}
                />
              </Link>
            </div>
            <div className="col">
              <h1 className="card-title">Perfil</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="card mx-2 my-1 border border-info">
        <div className="accordion" id="accordionUpdate">
          <div className="card">
            <div className="card-header bg-info" id="updateProfile">
              <div className="row">
                <div className="col-md-1">
                  <button
                    class="btn btn-info"
                    type="button"
                    data-toggle="collapse"
                    data-target="#collapseOne"
                    aria-expanded="false"
                    aria-controls="collapseOne"
                  >
                    <FontAwesomeIcon
                      icon={faCaretSquareDown}
                      className="fa-2x"
                    />
                  </button>
                </div>
                <div className="col-md-11">
                  <h3 className="mt-1 text-white">Actualizar perfil</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          id="collapseOne"
          className="collapse"
          aria-labelledby="updateProfile"
          data-parent="#accordionUpdate"
        >
          <div className="card-body border-bottom">
            <form>
              <div className="form-row">
                <div className="form-group col-md-6">
                  <label htmlFor="inputName" className="font-weight-bolder">
                    Nombres
                  </label>
                  <input type="text" className="form-control" id="inputEmail" />
                </div>
                <div class="form-group col-md-6">
                  <label htmlFor="inputLastName" className="font-weight-bolder">
                    Apellidos
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputLastName"
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group col-md-6">
                  <label
                    htmlForfor="inputIdType"
                    className="font-weight-bolder"
                  >
                    Tipo de Identificación
                  </label>
                  <select
                    id="inputIdType"
                    class="form-control"
                    defaultValue={"predeterminado"}
                  >
                    <option value="predeterminado" disabled>
                      Seleccione una opción
                    </option>
                    <option value="Cedula de ciudadanía">
                      Cedula de ciudadanía
                    </option>
                    <option value="Cedula de extranjería">
                      Cedula de extranjería
                    </option>
                    <option value="Pasaporte">Pasaporte</option>
                    <option value="Otro">Otro</option>
                  </select>
                </div>
                <div class="form-group col-md-6">
                  <label htmlFor="inputIdNumber" className="font-weight-bolder">
                    Número de Identificación
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    id="inputIdNumber"
                  />
                </div>
              </div>
              <div className="form-group">
                <label for="inputEmail" className="font-weight-bolder">
                  Correo Electrónico
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="inputEmail"
                  placeholder="mail@example.com"
                />
              </div>
              <div className="form-row">
                <div className="form-group col-md-4">
                  <label htmlForfor="inputPhone" className="font-weight-bolder">
                    Número telefónico
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    id="inputPhone"
                  />
                </div>
                <div className="form-group col-md-4">
                  <label
                    htmlFor="inputBirthDate"
                    className="font-weight-bolder"
                  >
                    Fecha de nacimiento
                  </label>
                  <input
                    type="date"
                    className="form-control"
                    id="inputBirthDate"
                    placeholder="Fecha de Nacimiento"
                  />
                </div>
                <div className="form-group col-md-4">
                  <label htmlFor="inputAdress" className="font-weight-bolder">
                    Dirección
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputAdress"
                  />
                </div>
              </div>
              <div class="form-group">
                <label for="inputUserName" className="font-weight-bolder">
                  Nombre de Usuario
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="inputUserName"
                  placeholder="UserName"
                />
              </div>
              <button type="submit" class="btn btn-info">
                Actualizar
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="card mx-2 my-1 border border-success">
        <div className="accordion" id="accordionOrders">
          <div className="card">
            <div className="card-header bg-success" id="orders">
              <div className="row">
                <div className="col-md-1">
                  <button
                    class="btn btn-success"
                    type="button"
                    data-toggle="collapse"
                    data-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >
                    <FontAwesomeIcon
                      icon={faCaretSquareDown}
                      className="fa-2x"
                    />
                  </button>
                </div>
                <div className="col-md-11">
                  <h3 className="mt-1 text-white">Ordenes</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          id="collapseTwo"
          className="collapse"
          aria-labelledby="orders"
          data-parent="#accordionOrders"
        >
          <div className="card-body border-bottom">
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
                      <h7 className="card-title font-weight-bolder">
                        Nombre del producto
                      </h7>
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
                <h6 className="card-title">
                  Metodo de pago: Tarjeta de credito
                </h6>
                <h5 className="card-title">Precio Total: $21.860</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
