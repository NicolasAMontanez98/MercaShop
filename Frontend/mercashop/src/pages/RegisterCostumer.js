import React, { useState } from "react";
import logo from "./../assets/images/Merca Shop letters.png";
import { Link } from "react-router-dom";
import axios from "axios";

export default function RegisterCostumer() {
  const [datos, setDatos] = useState({
    names: "",
    lastNames: "",
    idType: "",
    idNumber: 0,
    email: "",
    phone: 0,
    birthDate: "",
    adress: "",
    userName: "",
    password: "",
  });

  const handleRegister = async (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:7000/api/customer/registro", datos)
      .then(({ data }) => {
        localStorage.setItem("token", data.token);
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setDatos({
      ...datos,
      [name]: value,
    });
  };

  return (
    <div className="d-flex justify-content-center">
      <div className="card bg-white my-5 border">
        <div className="card-header bg-white border-bottom-0 text-center">
          <img
            src={logo}
            className="mb-2"
            width="190"
            height="190"
            alt="mercashop"
          />
          <h1 className="h3 mb-3 font-weight-normal">Registro Cliente</h1>
        </div>
        <div className="card-body">
          <form onSubmit={handleRegister}>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label htmlFor="inputName">Nombres</label>
                <input
                  type="text"
                  className="form-control"
                  name="names"
                  id="inputName"
                  placeholder="Nombres"
                  onChange={handleChange}
                />
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="inputName">Apellidos</label>
                <input
                  type="text"
                  className="form-control"
                  name="lastNames"
                  id="inputLastName"
                  placeholder="Apellidos"
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label htmlFor="inputId">Tipo Identificación</label>
                <select
                  type="text"
                  className="form-control"
                  name="idType"
                  id="inputId"
                  placeholder="Nombres"
                  defaultValue={"Cedula de ciudadanía"}
                  onChange={handleChange}
                >
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
              <div className="form-group col-md-6">
                <label htmlFor="inputIdNumber">Número de Identificación</label>
                <input
                  type="number"
                  className="form-control"
                  name="idNumber"
                  id="inputIdNumber"
                  placeholder="Identificación"
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group col-md-8">
                <label htmlFor="inputEmail">Correo Electrónico</label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  id="inputEmail"
                  placeholder="Correo Electrónico"
                  onChange={handleChange}
                />
              </div>
              <div className="form-group col-md-4">
                <label htmlFor="inputPhone">Teléfono</label>
                <input
                  type="text"
                  className="form-control"
                  name="phone"
                  id="inputPhone"
                  placeholder="Teléfono"
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label htmlFor="inputBirthDate">Fecha de Nacimiento</label>
                <input
                  type="date"
                  className="form-control"
                  name="birthDate"
                  id="inputBirthDate"
                  placeholder="Fecha de Nacimiento"
                  onChange={handleChange}
                />
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="inputAdress">Dirección</label>
                <input
                  type="text"
                  className="form-control"
                  name="adress"
                  id="inputAdress"
                  placeholder="Dirección"
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label htmlFor="inputUsername">Nombre de Usuario</label>
                <input
                  type="text"
                  className="form-control"
                  name="userName"
                  id="inputUsername"
                  placeholder="Nombre de Usuario"
                  onChange={handleChange}
                />
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="inputPassword">Contraseña</label>
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  id="inputPassword"
                  placeholder="Contraseña"
                  autoComplete="on"
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="row">
              <div className="col">
                <button
                  type="submit"
                  className="btn btn-info mt-2 btn-lg btn-block rounded-pill"
                >
                  Registrarse
                </button>
              </div>
              <div className="col">
                <Link to="/login" className="text-decoration-none">
                  <button className="btn btn-danger mt-2 btn-lg btn-block rounded-pill">
                    Cancelar
                  </button>
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
