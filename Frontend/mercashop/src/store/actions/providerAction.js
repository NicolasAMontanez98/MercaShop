import axios from "axios";
import {
  PROVIDER_SIGNIN_REQUEST,
  PROVIDER_SIGNIN_SUCCESS,
  PROVIDER_SIGNIN_FAIL,
  PROVIDER_REGISTER_REQUEST,
  PROVIDER_REGISTER_SUCCESS,
  PROVIDER_REGISTER_FAIL,
  PROVIDER_LOGOUT,
  PROVIDER_UPDATE_REQUEST,
  PROVIDER_UPDATE_SUCCESS,
  PROVIDER_UPDATE_FAIL,
} from "../constants/providerConstants";

const update = ({ userId, names, email, password }) => async (
  dispatch,
  getState
) => {
  const {
    providerSignIn: { providerInfo },
  } = getState();
  dispatch({
    type: PROVIDER_UPDATE_REQUEST,
    payload: { userId, names, email, password },
  });
  try {
    const { data } = await axios.put(
      "http://localhost:8000/api/provider/" + userId,
      { names, email, password },
      {
        headers: { Authorization: "Bearer " + providerInfo.token },
      }
    );
    dispatch({ type: PROVIDER_UPDATE_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: PROVIDER_UPDATE_FAIL, payload: error.message });
  }
};

const signIn = (email, password) => async (dispatch) => {
  dispatch({ type: PROVIDER_SIGNIN_REQUEST, payload: { email, password } });
  try {
    const { data } = await axios.post("http://localhost:8000/api/provider/ingreso", {
      email,
      password,
    });
    dispatch({ type: PROVIDER_SIGNIN_SUCCESS, payload: data });
    localStorage.setItem("providerInfo", JSON.stringify(data));
  } catch (error) {
    dispatch({ type: PROVIDER_SIGNIN_FAIL, payload: error.message });
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
  businessName,
  nit,
  commerceType,
  webPage,
  password,
) => async (dispatch) => {
  dispatch({
    type: PROVIDER_REGISTER_REQUEST,
    payload: {
      names,
      lastNames,
      idType,
      idNumber,
      email,
      phone,
      birthDate,
      adress,
      businessName,
      nit,
      commerceType,
      webPage,
      password,
    },
  });
  try {
    const { data } = await axios.post("http://localhost:8000/api/provider/registro", {
      names,
      lastNames,
      idType,
      idNumber,
      email,
      phone,
      birthDate,
      adress,
      businessName,
      nit,
      commerceType,
      webPage,
      password,
    });
    dispatch({ type: PROVIDER_REGISTER_SUCCESS, payload: data });
    localStorage.setItem("providerInfo", JSON.stringify(data));
  } catch (error) {
    dispatch({ type: PROVIDER_REGISTER_FAIL, payload: error.message });
  }
};

const logout = () => (dispatch) => {
  localStorage.removeItem("providerInfo");

  dispatch({ type: PROVIDER_LOGOUT });
};

export { signIn, register, update, logout };
