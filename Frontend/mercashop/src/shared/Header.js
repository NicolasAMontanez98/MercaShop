import React, { useState } from "react";
import logo from "./../assets/images/Merca Shop letters inline.png";
import { Link } from "react-router-dom";
import { SearchIcon } from "@primer/octicons-react";
import Carrito from "../components/Carrito";
import { Pedidos, Login, Location } from "../shared/Buttons";
import { listProducts } from "../store/actions/productAction";
import { useDispatch } from 'react-redux';

export default function Header(props) {
  const [search, setSearch] = useState("");
  const category = props.category;
  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(listProducts(category, search))
  }

  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-light bg-white border-bottom p-1">
        <Link className="navbar-brand" to="/home">
          <img src={logo} alt="logo" width="150" />
        </Link>
        <div className="row container">
          <div className="col-md-4">
            <div className="input-group ml-5">
              <form className="form-inline my-2 my-lg-0" onSubmit={submitHandler}>
                <input
                  className="form-control mr-sm-2 input-lg border border-dark"
                  type="search"
                  placeholder="Que quieres?"
                  aria-label="Search"
                  title="Busca"
                  name="search"
                  onChange={(e) => setSearch(e.target.value)}
                />
                <div className="input-group-append">
                  <button
                    className="btn btn-outline-dark"
                    type="submit"
                    id="button-addon2"
                  >
                    <SearchIcon size={20} />
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="col-md-8">
            <div className="collapse navbar-collapse d-flex justify-content-end" id="navbarNav">
              <Link className="navbar-link" to="/">
                <Location />
              </Link>
              <Link className="navbar-link" to="/login">
                <Login />
              </Link>
              <Pedidos />
              <Carrito />
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