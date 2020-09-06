import React from "react";
// import { useSelector } from 'react-redux'
import logo from "./../assets/images/Merca Shop letters inline.png";
import { Link } from "react-router-dom";
import { SearchIcon } from "@primer/octicons-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserCircle,
  faMapMarker,
  faShoppingBasket,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  // const [search, setSearch] = useState('');
  // const customerSignIn = useSelector((state) => state.customerSignIn);
  
  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-light bg-white border-bottom">
        <Link className="navbar-brand" to="/home">
          <img src={logo} width="180" height="90" alt="Logo"/>
        </Link>
        <div className="row container">
          <div className="col-md-4">
            <div className="input-group ml-5">
              <form className="form-inline my-2 my-lg-0">
                <input
                  className="form-control mr-sm-2 input-lg border border-dark"
                  type="search"
                  placeholder="Que quieres?"
                  aria-label="Search"
                  title="Busca"
                  // onChange={(e) => setSearch(e.target.value)}
                />
                <div className="input-group-append">
                  <button
                    className="btn btn-outline-dark"
                    type="button"
                    id="button-addon2"
                  >
                    <SearchIcon size={20} />
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="col-md-8">
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item active">
                  <Link className="navbar-link" to='/'>
                    <button
                      className="btn btn-success btn-circle text-center ml-4 pb-1 "
                      alt="dirección"
                      title="Dirección"
                    >
                      <FontAwesomeIcon icon={faMapMarker} /> Dirección
                    </button>
                  </Link>
                </li>
                <li className="nav-item active">
                  <Link className="navbar-link" to="/login">
                    <button
                      className="btn btn-primary text-center ml-4 pb-1 "
                      data-toggle="modal"
                      data-target="#formLogin"
                      alt="login"
                      title="Login"
                    >
                      <FontAwesomeIcon icon={faUserCircle} /> Registro
                    </button>
                  </Link>
                </li>
                <li className="nav-item active">
                  <button
                    className="btn btn-warning text-center ml-4 pb-1 "
                    alt="pedidos"
                    title="Pedidos"
                  >
                    <FontAwesomeIcon icon={faShoppingBasket} /> Pedidos
                  </button>
                </li>
                <li className="nav-item active">
                  <button
                    className="btn btn-danger   text-center ml-4 pb-1 "
                    alt="carrito"
                    title="Carrito de compras"
                  >
                    <FontAwesomeIcon icon={faShoppingCart} /> Carrito
                  </button>
                </li>
              </ul>
            </div>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
      </nav>
    </div>
  );
}
