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
  customerRegisterReducer,
  customerSignInReducer,
  customerUpdateReducer,
} from "./reducers/customerReducer";
import {
  providerSignInReducer,
  providerRegisterReducer,
  providerUpdateReducer,
} from "./reducers/providerReducer";
import {
  orderCreateReducer,
  orderDetailsReducer,
  myOrderListReducer,
  orderListReducer,
  orderPayReducer,
  orderDeleteReducer,
} from "./reducers/orderReducer";
import { cartReducer } from './reducers/cartReducer';
import { Cookies } from 'js-cookie';


const cartItems = localStorage.getItem("cartItems") || [];
// const cartItems = Cookies.getJSON('cartItems') || [];
const customerInfo = localStorage.getItem("customerInfo") || null;
const providerInfo = localStorage.getItem("providerInfo") || null;

const rootReducer = combineReducers({
  productList: productListReducer,
  productDetails: productDetailsReducer,
  cart: cartReducer,
  customerSignIn: customerSignInReducer,
  providerSignIn: providerSignInReducer,
  customerRegister: customerRegisterReducer,
  providerRegister: providerRegisterReducer,
  customerUpdate: customerUpdateReducer,
  providerUpdate: providerUpdateReducer,
  productSave: productSaveReducer,
  productDelete: productDeleteReducer,
  productReviewSave: productReviewSaveReducer,
  orderCreate: orderCreateReducer,
  orderDetails: orderDetailsReducer,
  orderPay: orderPayReducer,
  myOrderList: myOrderListReducer,
  orderList: orderListReducer,
  orderDelete: orderDeleteReducer,
});

const composeEnhancer = window.__REDUX_DEVTOOL_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  composeEnhancer(applyMiddleware(thunk))
);
export default store;
