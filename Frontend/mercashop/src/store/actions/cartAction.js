import axios from "axios";
import {
  CART_ADD_ITEM,
  CART_REMOVE_ITEM,
  CART_SAVE_PAYMENT,
  CART_SAVE_SHIPPING,
} from "../constants/cartConstants";

const addToCart = (productId, qty) => async (dispatch, getState) => {
  const { data } = await axios.get("/api/products/" + productId);
  dispatch({
    type: CART_ADD_ITEM,
    payload: {
      product: data._id,
      title: data.title,
      image: data.urlImage,
      price: data.price,
      countInStock: data.countInStock,
      qty: data.quantity,
    },
  });
  const {
    cart: { cartItems },
  } = getState();
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
};

const removeFromCart = (productId) => (dispatch, getState) => {
  dispatch({ type: CART_REMOVE_ITEM, payload: productId });
  const {
    cart: { cartItems },
  } = getState();
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
};

const saveShipping = (data) => (dispatch) => {
  dispatch({ type: CART_SAVE_SHIPPING, payload: data });
};

const savePayment = (data) => (dispatch) => {
  dispatch({ type: CART_SAVE_PAYMENT, payload: data });
};

export { addToCart, removeFromCart, saveShipping, savePayment };
