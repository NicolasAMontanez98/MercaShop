import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux"; // No ha sido utilizado/
import logo from "./../assets/images/Merca Shop letters inline.png";
import logoWhite from "../assets/images/Merca Shop letters inline white.png";
import { Link, useLocation } from "react-router-dom";
import { SearchIcon } from "@primer/octicons-react";
import Carrito from "../components/Carrito";
import { Pedidos, Location } from "../shared/Buttons";
import IconButton from "@material-ui/core/IconButton";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { makeStyles } from "@material-ui/core/styles";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { logout as logoutCustomer } from "../store/actions/customerAction";
import { logout as logoutProvider } from "../store/actions/providerAction";
import AccountCircle from "@material-ui/icons/AccountCircle";
import AccountBox from "@material-ui/icons/AccountBox";
import { listProducts } from "../store/actions/productAction";

export default function Header(props) {
  const [search, setSearch] = useState(""); 
  const [anchorEl, setAnchorEl] = React.useState(null);
  const customerSignIn = useSelector((state) => state.customerSignIn);
  const { customerInfo } = customerSignIn;
  const providerSignIn = useSelector((state) => state.providerSignIn);
  const { providerInfo } = providerSignIn;
  const dispatch = useDispatch();
  const [path, setPath] = useState(window.location.pathname);
  let location = useLocation();
  const category = '';

  useEffect(() => {
    setPath(location.pathname);
  }, [location]);

  const useStyles = makeStyles((theme) => ({
    root: {
      "& > *": {
        margin: theme.spacing(1),
      },
    },
  }));

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleLogOut = (e) => {
    e.preventDefault();
    {customerInfo ? dispatch(logoutCustomer()) : dispatch(logoutProvider())}
  };

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(listProducts(category, search))
  }

  const classes = useStyles();

  const { names } = customerInfo ? customerInfo : "";

  return (
    <div className="App">
      {path === "/login" ||
      path === "/login-proveedor" ||
      path === "/registro-cliente" ||
      path === "/registro-proveedor" ? (
        <nav className="navbar navbar-expand-lg navbar-light bg-dark border-bottom p-1">
          <Link className="navbar-brand ml-4" to="/">
            <img src={logoWhite} alt="logo" width="150" />
          </Link>
          <div className="row container">
            <div className="col-md-4"></div>
            <div className="col-md-8">
              <div
                className="collapse navbar-collapse d-flex justify-content-end"
                id="navbarNav"
              ></div>
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
      ) : (
        <nav className="navbar navbar-expand-lg navbar-light bg-white border-bottom p-1">
          <Link className="navbar-brand ml-4" to="/">
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
              <div
                className="collapse navbar-collapse d-flex justify-content-end"
                id="navbarNav"
              >
                <Link className="navbar-link" to="/">
                  <Location />
                </Link>
                <Pedidos />
                <Carrito />
                <div className={classes.root}>
                  <IconButton
                    aria-label="menu"
                    data-toggle="tooltip"
                    data-placement="bottom"
                    title={names}
                    style={{ color: "#2980b9" }}
                    id="login"
                    onClick={handleClick}
                  >
                    <AccountCircleIcon fontSize="large" />
                  </IconButton>
                  {customerInfo || providerInfo ? (
                    <Menu
                      id="simple-menu"
                      anchorEl={anchorEl}
                      keepMounted
                      open={Boolean(anchorEl)}
                      onClose={handleClose}
                    >
                      <MenuItem>
                        <span>{names}</span>
                      </MenuItem>
                      <MenuItem>
                        { customerInfo ? (
                          <Link
                            to={"/profile/" + customerInfo._id}
                            className="text-decoration-none text-dark"
                          >
                            Profile
                          </Link>
                          
                        ) : (
                          <Link
                            to={"/profile-provider/" + providerInfo._id}
                            className="text-decoration-none text-dark"
                          >
                            Profile
                          </Link>
                        )}
                      </MenuItem>
                      <MenuItem onClick={handleClose}>My account</MenuItem>
                      <MenuItem onClick={handleLogOut}>Logout</MenuItem>
                    </Menu>
                  ) : (
                    <Menu
                      id="simple-menu"
                      anchorEl={anchorEl}
                      keepMounted
                      open={Boolean(anchorEl)}
                      onClose={handleClose}
                    >
                      <MenuItem>
                        <Link to="/login" className="text-decoration-none text-dark">
                          <AccountCircle className="mr-2" />
                          Cliente
                        </Link>
                      </MenuItem>
                      <MenuItem>
                        <Link
                          to="/login-proveedor"
                          className="text-decoration-none text-dark"
                        >
                          <AccountBox className="mr-2" />
                          Proveedor
                        </Link>
                      </MenuItem>
                    </Menu>
                  )}
                </div>
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
      )}
    </div>
  );
}
