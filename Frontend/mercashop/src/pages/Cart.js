import React, { useEffect } from 'react';
import { addToCart, removeFromCart } from '../store/actions/cartAction';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function Cart (props) {

  const cart = useSelector(state => state.cart);

  const {cartItems} = cart;
  // console.log(cartItems);
  const productId = props.match.params.id;
  const qty = props.location.search ? Number(props.location.search.split("=")[1]) : 1;
  const dispatch = useDispatch();
  const removeFromCartHandler = (productId) => {
    dispatch(removeFromCart(productId));
  }

  // useEffect(() => {
  //   if(productId) {
  //     dispatch(addToCart(productId, qty));
  //   }
  // }, []);

  const checkoutHandler = () => {
    props.history.push("/signin?redirect=shipping");
  }
  // console.log(cart);
  // return ( cartItems.map(item => <h3>item.price</h3>))
  return (// <h3>{cartItems}</h3>)
    <div className="cart">
      <div className="cart-list">
        <ul className="cart-list-container">
          <li>
            <h3>Carro de Compras</h3>
            <div>Precio</div>
          </li>
          {
            cartItems.length === 0 ?
            <div>El carro está vacío</div>  :
            cartItems.map(item => 
              <li>
                <div className="cart-image">
                  <img src={item.image} alt="product" />
                </div>
                <div className="cart-name">
                  <div>
                    <Link to={"/product/" + item.product}>
                      {item.name}
                    </Link>
                  </div>
                  <div>
                    Cantidad: 
                    <select value={item.qty} onChange={(e) => dispatch(addToCart(item.product, e.target.value))}>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                    </select>
                    <button type="button" className="button" onClick={() => removeFromCartHandler(item.product)}>
                      Eliminar
                    </button>
                  </div>
                </div>
                <div className="cart-price">$ {item.price}</div>
              </li>
            ) 

          }
        </ul>
      </div>
      <div className="cart-action">
        <h3>
          Subtotal ({cartItems.reduce((a, c) => a + c.qty, 0)} artículos)
          :
          $ {cartItems.reduce((a, c) => a + c.price * c.qty, 0)}
        </h3>
        <button 
          onClick={checkoutHandler} 
          className="btn btn-outline-primary btn-sm rounded-pill full-width" 
          // disable={cartItems.length === 0}
          disable={cartItems.length === 0}
        >
          Seguir con la compra
        </button>
      </div>
    </div>
  )
}

export default Cart;