import axios from "axios";
import { Cookies } from 'js-cookie';
import {
  CART_ADD_ITEM,
  CART_REMOVE_ITEM,
  CART_SAVE_PAYMENT,
  CART_SAVE_SHIPPING,
} from "../constants/cartConstants";

// const addToCart = (productId, qty) => async (dispatch, getState) => {
//   const { data } = await axios.get("/api/product/" + productId);
//   dispatch({
//     type: CART_ADD_ITEM,
//     payload: {
//       product: data._id,
//       title: data.title,
//       image: data.urlImage,
//       price: data.price,
//       countInStock: data.countInStock,
//       qty: data.quantity,
//     },
//   });
//   const {
//     cart: { cartItems },
//   } = getState();
//   localStorage.setItem("cartItems", JSON.stringify(cartItems));
// };

const addToCart = (productId, qty) => async (dispatch, getState) => {
  try {
    const {data} = await axios.get("/api/product/" + productId);
    dispatch({type: CART_ADD_ITEM, payload: {
      product: data._id,
      name: data.name,
      image: data.image,
      price: data.price,
      qty
    }});

    const {cart: {cartItems}} = getState();
    localStorage.set("cartItems", JSON.stringify(cartItems));
    // localStorage.set("cartItems", cartItems);
    // Cookies.set("cartItems", JSON.stringify(cartItems));

  } catch (error) {
    
  }

  // const addToCart = (productId, qty) => async (dispatch, getState) => {
  //   try {
  //     const { data } = await Axios.get("/api/products/" + productId);
  //     dispatch({
  //       type: CART_ADD_ITEM, payload: {
  //         product: data._id,
  //         name: data.name,
  //         image: data.image,
  //         price: data.price,
  //         countInStock: data.countInStock,
  //         qty
  //       }
  //     });
  //     const { cart: { cartItems } } = getState();
  //     Cookie.set("cartItems", JSON.stringify(cartItems));
  
  //   } catch (error) {
  
  //   }
  // }
}

// const addToCart = (productId, qty) => async (dispatch, getState) => {
//   try {
//     const { data } = await Axios.get("/api/products/" + productId);
//     dispatch({
//       type: CART_ADD_ITEM, payload: {
//         product: data._id,
//         name: data.name,
//         image: data.image,
//         price: data.price,
//         countInStock: data.countInStock,
//         qty
//       }
//     });
//     const { cart: { cartItems } } = getState();
//     Cookie.set("cartItems", JSON.stringify(cartItems));

//   } catch (error) {

//   }
// }

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
