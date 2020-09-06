import React from "react";
import logo from "./../assets/images/Merca Shop letters.png";
import { Link } from "react-router-dom";

class RegisterCostumer extends React.Component {
  constructor() {
    super();
    this.state = {
      nombres: "",
      apellidos: "",
      tipoIdentificacion: "",
      numIdentificacion: 0,
      correoElectronico: "",
      telefono: 0,
      fechaNacimiento: "",
      direccion: "",
      razonSocial: "",
      NIT: 0,
      tipoComercio: "",
      paginaWeb: "",
      password: "",
    };
  }
  render() {
    return (
      <div className="d-flex justify-content-center">
        <div className="card bg-light my-5">
          <div className="card-header text-center">
            <img src={logo} className="mb-2" width="190" height="190" alt='MercaShop'/>
            <h1 className="h3 mb-3 font-weight-normal">
              Registro Cliente
            </h1>
          </div>
          <div className="card-body">
            <form>
              <div className="form-row">
                <div className="form-group col-md-6">
                  <label htmlFor="inputName">
                    Nombres
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputName"
                    placeholder="Nombres"
                  />
                </div>
                <div className="form-group col-md-6">
                  <label htmlFor="inputName">
                    Apellidos
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputLastName"
                    placeholder="Apellidos"
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group col-md-6">
                  <label htmlFor="inputId">
                    Tipo Identificación
                  </label>
                  <select
                    type="text"
                    className="form-control"
                    id="inputId"
                    placeholder="Nombres"
                  >
                    <option>Cedula de ciudadanía</option>
                    <option>Pasaporte</option>
                    <option>Otro</option>
                  </select>
                </div>
                <div className="form-group col-md-6">
                  <label htmlFor="inputIdNumber">
                    Número de Identificación
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    id="inputIdNumber"
                    placeholder="Identificación"
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group col-md-8">
                  <label htmlFor="inputEmail">
                    Correo Electrónico
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="inputLastName"
                    placeholder="Correo Electrónico"
                  />
                </div>
                <div className="form-group col-md-4">
                  <label htmlFor="inputPhone">
                    Teléfono
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputPhone"
                    placeholder="Teléfono"
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group col-md-6">
                  <label htmlFor="inputBirthDate">
                    Fecha de Nacimiento
                  </label>
                  <input
                    type="date"
                    className="form-control"
                    id="inputBirthDate"
                    placeholder="Fecha de Nacimiento"
                  />
                </div>
                <div className="form-group col-md-6">
                  <label htmlFor="inputAdress">
                    Dirección
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputAdress"
                    placeholder="Dirección"
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group col-md-6">
                  <label htmlFor="inputUsername">
                    Nombre de Usuario
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputUsername"
                    placeholder="Nombre de Usuario"
                  />
                </div>
                <div className="form-group col-md-6">
                  <label htmlFor="inputPassword">
                    Contraseña
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="inputPassword"
                    placeholder="Contraseña"
                  />
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <button className="btn btn-info mt-2 btn-lg btn-block rounded-pill">
                    Registrarse
                  </button>
                </div>
                <div className="col">
                  <Link to="/">
                    <button className="btn btn-info mt-2 btn-lg btn-block rounded-pill">
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
}

export default RegisterCostumer;
