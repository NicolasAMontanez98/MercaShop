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
  orderCreateReducer,
  orderDetailsReducer,
  myOrderListReducer,
  orderListReducer,
  orderPayReducer,
  orderDeleteReducer,
} from "./reducers/orderReducer";
import { cartReducer } from './reducers/cartReducer';

const cartItems = localStorage.getItem("cartItems") || [];
const customerInfo = localStorage.getItem("customerInfo") || null;

const initialState = {
  cart: { cartItems, shipping: {}, payment: {} },
  customerSignIn: { customerInfo },
};
const rootReducer = combineReducers({
  productList: productListReducer,
  productDetails: productDetailsReducer,
  cart: cartReducer,
  customerSignIn: customerSignInReducer,
  customerRegister: customerRegisterReducer,
  productSave: productSaveReducer,
  productDelete: productDeleteReducer,
  productReviewSave: productReviewSaveReducer,
  orderCreate: orderCreateReducer,
  orderDetails: orderDetailsReducer,
  orderPay: orderPayReducer,
  customerUpdate: customerUpdateReducer,
  myOrderList: myOrderListReducer,
  orderList: orderListReducer,
  orderDelete: orderDeleteReducer,
});

const composeEnhancer = window.__REDUX_DEVTOOL_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  initialState,
  composeEnhancer(applyMiddleware(thunk))
);
export default store;