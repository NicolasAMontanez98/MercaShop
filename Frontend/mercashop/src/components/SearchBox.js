import React, { Fragment, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import { TextField, InputBase, IconButton } from "@material-ui/core";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { listProducts } from "../store/actions/productAction";
import { SearchIcon } from "@primer/octicons-react";
import { Link } from "react-router-dom";

export default function SearchBox() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { products, loading, error } = productList;
  const [search, setSearch] = useState("");
  let category = "";

  const formatCurrency = (number) => {
    let res = new Intl.NumberFormat("en-CO").format(number);
    return res;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(listProducts(category, search));
  };

  return (
    <div className="ml-5">
      <Autocomplete
        autoSelect
        options={products}
        onChange={(event, value) => setSearch(value)}
        id="searchBox"
        getOptionLabel={(option) => option.name}
        renderOption={(option, { selected }) => {
          return (
            <Fragment>
              <div className="row no-gutters">
                <div className="col-md-2">
                  <div className="card-body mr-2">
                    <img
                      src={option.image}
                      alt={option.name}
                      width="50"
                      height="50"
                      className="mr-2"
                    />
                  </div>
                </div>
                <div className="col-md-8 justify-content-center">
                  <div className="card-body">
                    <div className="row">
                      <div className="col-md-8 d-flex">
                        <Link
                          to={"/product/" + option._id}
                          className="text-decoration-none"
                        >
                          {option.name}
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-2">
                  <div className="card-body">
                    <p>${formatCurrency(option.price)}</p>
                  </div>
                </div>
              </div>
            </Fragment>
          );
        }}
        renderInput={(params) => (
          <form onSubmit={handleSubmit}>
            <TextField
              {...params}
              label="¿Que estás buscando?"
              margin="normal"
              variant="outlined"
            />
          </form>
        )}
      />
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    width: 400,
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
}));
