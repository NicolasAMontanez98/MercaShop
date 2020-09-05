import React from "react";
import logo from "./../assets/images/Merca Shop letters.png";
import { Link } from "react-router-dom";

class RegisterProvider extends React.Component {
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
      nit: 0,
      tipoComercio: "",
      paginaWeb: "",
      password: "",
    };
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ 
      [name]: value 
    })
  }

  handleRegister = (e) => {
    e.preventDefault();
    console.log(this.state);
  };

  render() {
    return (
      <div className="d-flex justify-content-center">
        <div className="card bg-light my-5">
          <div className="card-header text-center">
            <img src={logo} className="mb-2" width="190" height="190"  alt='MercaShop'/>
            <h1 className="h3 mb-3 font-weight-normal">
              Registro Proveedor
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
                    name="nombres"
                    placeholder="Nombres"
                    onChange={this.handleChange}
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
                    name="apellidos"
                    placeholder="Apellidos"
                    onChange={this.handleChange}
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
                    name="tipoIdentificacion"
                    placeholder="Nombres"
                    onChange={this.handleChange}
                  >
                    <option value="Cedula de ciudadanía">Cedula de ciudadanía</option>
                    <option value="Psaporte">Pasaporte</option>
                    <option value="Otro">Otro</option>
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
                    name="numIdentificacion"
                    placeholder="Identificación"
                    onChange={this.handleChange}
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
                    name="correoElectronico"
                    placeholder="Correo Electrónico"
                    onChange={this.handleChange}
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
                    name="telefono"
                    placeholder="Teléfono"
                    onChange={this.handleChange}
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
                    name="fechaNacimiento"
                    placeholder="Fecha de Nacimiento"
                    onChange={this.handleChange}
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
                    name="direccion"
                    placeholder="Dirección"
                    onChange={this.handleChange}
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group col-md-6">
                  <label htmlFor="inputBussinessName">
                    Razón Social
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputBussinessName"
                    name="razonSocial"
                    placeholder="Razón Social"
                    onChange={this.handleChange}
                  />
                </div>
                <div className="form-group col-md-6">
                  <label htmlFor="inputNIT">
                    NIT
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    id="inputNIT"
                    name="nit"
                    placeholder="Sin dígito de verificación"
                    onChange={this.handleChange}
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group col-md-6">
                  <label htmlFor="inputId">
                    Tipo de Comercio
                  </label>
                  <select
                    type="text"
                    className="form-control"
                    id="inputId"
                    name="tipoComercio"
                    placeholder="Nombres"
                  >
                    <option value="Restaurante">Restaurante</option>
                    <option value="Supermercado">Supermercado</option>
                    <option value="Licores">Licores</option>
                    <option value="Tiendas de conveniencia">Tiendas de conveniencia</option>
                    <option value="Mascotas">Mascotas</option>
                  </select>
                </div>
                <div className="form-group col-md-6">
                  <label htmlFor="inputWeb">
                    Página Web
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputWeb"
                    name="paginaWeb"
                    placeholder="Página web"
                    onChange={this.handleChange}
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group col-md-12">
                  <label htmlFor="inputPassword">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="inputPassword"
                    name="password"
                    placeholder="Contraseña"
                    onChange={this.handleChange}
                  />
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <button className="btn btn-info mt-2 btn-lg btn-block rounded-pill" onClick={this.handleRegister}>
                    Registrarse
                  </button>
                </div>
                <div className="col">
                  <Link to="/home">
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

export default RegisterProvider;
