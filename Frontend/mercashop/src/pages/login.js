import React, { useState, useEffect } from "react";
import { Link, Redirect } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import logo from "./../assets/images/Merca Shop letters.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle, faKey } from "@fortawesome/free-solid-svg-icons";
import { signIn } from "../store/actions/customerAction";
import Swal from "sweetalert2";

function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const customerSignIn = useSelector((state) => state.customerSignIn);
  const { loading, customerInfo, error } = customerSignIn;
  const dispatch = useDispatch();

  const redirect = props.location.search
    ? props.location.search.split("=")[1]
    : "/";

  useEffect(() => {
    if (customerInfo) {
      props.history.push(redirect);
    }
    return () => {
      //
    };
  }, [customerInfo]);

  const handleBack = (e) => {
    e.preventDefault();
    props.history.push('/');
  }

  const handleRegister = (e) => {
    e.preventDefault();
    dispatch(signIn(email, password));
    Swal.fire({
      title: "Ingreso exitoso",
      icon: "success",
      confirmButtonColor: '#28B463',
      confirmButtonText: "Genial!!! volver a inicio.",
    }).then((result) => {
      // window.location.reload(false);
      props.history.push(redirect);
    });
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
            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <span className="input-group-text bg-white" id="basic-addon1">
                  <FontAwesomeIcon icon={faUserCircle} />
                </span>
              </div>
              <input
                type="email"
                id="inputEmail"
                name="email"
                className="form-control"
                placeholder="Correo Electrónico"
                onChange={(e) => setEmail(e.target.value)}
                required
              ></input>
            </div>
            <label htmlFor="inputemail">Contraseña</label>
            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <span className="input-group-text bg-white" id="basic-addon1">
                  <FontAwesomeIcon icon={faKey} />
                </span>
              </div>
              <input
                type="password"
                id="inputPassword"
                name="password"
                className="form-control"
                placeholder="Contraseña"
                onChange={(e) => setPassword(e.target.value)}
                required
              ></input>
            </div>
            <div className="mb-2">
              <Link to="/login-proveedor" className="">
                ¿Eres proveedor?
              </Link>
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
                  <button
                    className="btn btn-info btn-sm mt-2 btn-block"
                    style={{ borderRadius: "40px 10px 10px 40px" }}
                  >
                    Registrarse Cliente
                  </button>
                </Link>
              </div>
              <div className="col">
                <Link to="/registro-proveedor" className="text-decoration-none">
                  <button
                    className="btn btn-info btn-sm mt-2 btn-block"
                    style={{ borderRadius: "10px 40px 40px 10px" }}
                  >
                    Registrarse Proveedor
                  </button>
                </Link>
              </div>
            </div>
            {/* <Link to="/" className="text-decoration-none"> */}
              <button className="btn btn-lg btn-danger btn-block rounded-pill mt-2 text-decoration-none" onClick={handleBack}>
                Regresar
              </button>
            {/* </Link> */}
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
