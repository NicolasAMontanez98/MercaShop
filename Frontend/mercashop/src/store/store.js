import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import {
  productListReducer,
  productDetailsReducer,
  productSaveReducer,
  productReviewSaveReducer,
  productDeleteReducer,
} from "./reducers/productReducer";
import {
  userRegisterReducer,
  userSignInReducer,
  userUpdateReducer,
} from "./reducers/customerReducer";
import {
  orderCreateReducer,
  orderDetailsReducer,
  myOrderListReducer,
  orderListReducer,
  orderPayReducer,
  orderDeleteReducer,
} from "./reducers/orderReducer";
import { cartReducer } from './reducers/cartReducer';

const cartItems = localStorage.getItem("cartItems") || [];
const userInfo = localStorage.getItem("userInfo") || null;

const initialState = {
  cart: { cartItems, shipping: {}, payment: {} },
  userSignIn: { userInfo },
};
const rootReducer = combineReducers({
  productList: productListReducer,
  productDetails: productDetailsReducer,
  cart: cartReducer,
  userSignIn: userSignInReducer,
  userRegister: userRegisterReducer,
  productSave: productSaveReducer,
  productDelete: productDeleteReducer,
  productReviewSave: productReviewSaveReducer,
  orderCreate: orderCreateReducer,
  orderDetails: orderDetailsReducer,
  orderPay: orderPayReducer,
  userUpdate: userUpdateReducer,
  myOrderList: myOrderListReducer,
  orderList: orderListReducer,
  orderDelete: orderDeleteReducer,
});

const composeEnhancer = window.__REDUX_DEVTOOL_COMPOSE__;
const store = createStore(
  rootReducer,
  initialState,
  compose(applyMiddleware(thunk))
);
export default store;