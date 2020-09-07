import {
  CART_ADD_ITEM,
  CART_REMOVE_ITEM,
  CART_SAVE_SHIPPING,
  CART_SAVE_PAYMENT,
} from "../constants/cartConstants";

// function cartReducer(
//   state = { cartItems: [], shipping: {}, payment: {} },
//   action
// ) {
//   switch (action.type) {
//     case CART_ADD_ITEM:
//       const item = action.payload;
//       const product = state.cartItems.find((i) => i.product === item.product);
//       if (product) {
//         return state.cartItems.map((i) =>
//           i.product === product.product ? item : i
//         );
//       }
//       return { cartItems: [...state.cartItems, item] };
//     case CART_REMOVE_ITEM:
//       return { ...state, shipping: action.payload };
//     case CART_SAVE_SHIPPING:
//       return { ...state, shipping: action.payload };
//     case CART_SAVE_PAYMENT:
//       return { ...state, payment: action.payload };
//     default:
//       return state;
//   }
// }

function cartReducer(state={cartItems: [], shipping: {}, payment: {}}, action) {
  switch(action.type) {
    case CART_ADD_ITEM:
      console.log(action);
      const item = action.payload;
      // const product = state.cartItems.find(x => x.product === item.product);
      // if(product) {
      //   return {
      //     ...state, 
      //       cartItems: state.cartItems.map(x => x.product === product.product ? item : x)
      //   };
      // } 
      return {...state, cartItems: [...state.cartItems, item]};
    case CART_REMOVE_ITEM:
      return {...state, cartItems: state.cartItems.filter(x => x.product !== action.payload)};  
    case CART_SAVE_SHIPPING:
      return {...state, shipping: action.payload}  
    case CART_SAVE_PAYMENT:
      return {...state, payment: action.payload}  
    default: 
      return state;
  }
}


export { cartReducer };
