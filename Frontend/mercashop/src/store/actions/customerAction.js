import axios from "axios";
import {
  CUSTOMER_SIGNIN_REQUEST,
  CUSTOMER_SIGNIN_SUCCESS,
  CUSTOMER_SIGNIN_FAIL,
  CUSTOMER_REGISTER_REQUEST,
  CUSTOMER_REGISTER_SUCCESS,
  CUSTOMER_REGISTER_FAIL,
  CUSTOMER_LOGOUT,
  CUSTOMER_UPDATE_REQUEST,
  CUSTOMER_UPDATE_SUCCESS,
  CUSTOMER_UPDATE_FAIL,
} from "../constants/customerConstants";

const update = ({ userId, names, email, password }) => async (
  dispatch,
  getState
) => {
  const {
    customerSignIn: { customerInfo },
  } = getState();
  dispatch({
    type: CUSTOMER_UPDATE_REQUEST,
    payload: { userId, names, email, password },
  });
  try {
    const { data } = await axios.put(
      "/api/customer/" + userId,
      { names, email, password },
      {
        headers: { Authorization: "Bearer " + customerInfo.token },
      }
    );
    dispatch({ type: CUSTOMER_UPDATE_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: CUSTOMER_UPDATE_FAIL, payload: error.message });
  }
};

const signIn = (email, password) => async (dispatch) => {
  dispatch({ type: CUSTOMER_SIGNIN_REQUEST, payload: { email, password } });
  try {
    const { data } = await axios.post("http://localhost:8000/api/customer/ingreso", {
      email,
      password,
    });
    dispatch({ type: CUSTOMER_SIGNIN_SUCCESS, payload: data });
    localStorage.setItem("customerInfo", JSON.stringify(data));
  } catch (error) {
    dispatch({ type: CUSTOMER_SIGNIN_FAIL, payload: error.message });
  }
};

const register = (
  names,
  lastNames,
  idType,
  idNumber,
  email,
  phone,
  birthDate,
  adress,
  userName,
  password
) => async (dispatch) => {
  dispatch({
    type: CUSTOMER_REGISTER_REQUEST,
    payload: {
      names,
      lastNames,
      idType,
      idNumber,
      email,
      phone,
      birthDate,
      adress,
      userName,
      password,
    },
  });
  try {
    const { data } = await axios.post("http://localhost:8000/api/customer/registro", {
      names,
      lastNames,
      idType,
      idNumber,
      email,
      phone,
      birthDate,
      adress,
      userName,
      password,
    });
    dispatch({ type: CUSTOMER_REGISTER_SUCCESS, payload: data });
    localStorage.setItem("customerInfo", JSON.stringify(data));
  } catch (error) {
    dispatch({ type: CUSTOMER_REGISTER_FAIL, payload: error.message });
  }
};

const logout = () => (dispatch) => {
  localStorage.removeItem("customerInfo");

  dispatch({ type: CUSTOMER_LOGOUT });
};

export { signIn, register, update, logout };
