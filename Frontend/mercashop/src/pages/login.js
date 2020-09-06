import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import logo from "./../assets/images/Merca Shop letters.png";
import axios from "axios";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [provider, setprovider] = useState(false);
  const [url, seturl] = useState("http://localhost:7000/api/");

  const handleRegister = (e) => {
    e.preventDefault();
    console.log(url);
  };

  const handleCheck = (e) => {
    const { checked } = e.target;
    setprovider({
      checked,
    });
    seturl(
      provider
        ? "http://localhost:7000/api/provider/ingreso"
        : "http://localhost:7000/api/customer/ingreso"
    );
  };

  return (
    <div className=" d-flex justify-content-center">
      <div className="card bg-white my-5" style={{ width: "20rem" }}>
        <div className="card-header bg-white border-bottom-0 text-center">
          <img
            src={logo}
            className="mb-2"
            width="190"
            height="190"
            alt="mercashop"
          />
          <h1 className="h3 mb-3 font-weight-normal">
            Inicia Sesión o Registrate
          </h1>
        </div>
        <div className="card-body">
          <form className="form-signin" width="500" onSubmit={handleRegister}>
            <label htmlFor="inputemail">Correo Electrónico</label>
            <input
              type="email"
              id="inputEmail"
              name="email"
              className="form-control mb-3"
              placeholder="Correo Electrónico"
              onChange={(e) => setEmail(e.target.value)}
              required
            ></input>
            <label htmlFor="inputemail">Contraseña</label>
            <input
              type="password"
              id="inputPassword"
              name="password"
              className="form-control mb-3"
              placeholder="Contraseña"
              onChange={(e) => setPassword(e.target.value)}
              required
            ></input>
            <div className="form-check mb-4">
              <input
                className="form-check-input"
                name="provider"
                type="checkbox"
                defaultChecked={provider}
                value={provider}
                onChange={handleCheck}
                id="defaultCheck1"
              />
              <label className="form-check-label" htmlFor="defaultCheck1">
                Soy proveedor
              </label>
            </div>
            <button
              className="btn btn-lg btn-primary btn-block rounded-pill"
              type="submit"
            >
              Ingresar
            </button>
            <div className="row">
              <div className="col">
                <Link to="/registro-cliente" className="text-decoration-none">
                  <button className="btn btn-info btn-sm mt-2 btn-block" style={{"borderRadius": "40px 10px 10px 40px"}}>
                    Registrarse Cliente
                  </button>
                </Link>
              </div>
              <div className="col">
                <Link to="/registro-proveedor" className="text-decoration-none">
                  <button className="btn btn-info btn-sm mt-2 btn-block" style={{"borderRadius": "10px 40px 40px 10px"}}>
                    Registrarse Proveedor
                  </button>
                </Link>
              </div>
            </div>
            <Link to="/" className="text-decoration-none">
              <button className="btn btn-lg btn-danger btn-block rounded-pill mt-2 text-decoration-none">
                Regresar
              </button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;