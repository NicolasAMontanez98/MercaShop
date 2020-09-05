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
} from "../constants/userConstanst";

const update = ({ userId, names, email, password }) => async (
  dispatch,
  getState
) => {
  const {
    userSignIn: { userInfo },
  } = getState();
  dispatch({
    type: CUSTOMER_UPDATE_REQUEST,
    payload: { userId, names, email, password },
  });
  try {
    const { data } = await axios.put(
      "/api/customer/" + userId,
      { name, email, password },
      {
        headers: { Authorization: "Bearer " + userInfo.token },
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
    const { data } = await axios.post("/api/customer/ingreso", {
      email,
      password,
    });
    dispatch({ type: CUSTOMER_SIGNIN_SUCCESS, payload: data });
    localStorage.setItem("userInfo", JSON.stringify(data));
  } catch (error) {
    dispatch({ type: CUSTOMER_SIGNIN_FAIL, payload: error.message });
  }
};

const register = (name, email, password) => async (dispatch) => {
  dispatch({ type: CUSTOMER_REGISTER_REQUEST, payload: { name, email, password } });
  try {
    const { data } = await axios.post("/api/customer/registro", {
      name,
      email,
      password,
    });
    dispatch({ type: CUSTOMER_REGISTER_SUCCESS, payload: data });
    localStorage.setItem("userInfo", JSON.stringify(data));
  } catch (error) {
    dispatch({ type: CUSTOMER_REGISTER_FAIL, payload: error.message });
  }
};

const logout = () => (dispatch) => {
  localStorage.removeItem("userInfo");
  dispatch({ type: CUSTOMER_LOGOUT });
};

export { signIn, register, update, logout };