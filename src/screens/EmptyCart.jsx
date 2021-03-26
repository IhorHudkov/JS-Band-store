import React from 'react';
import './styles/cart.scss';
import './styles/empty_cart.scss';
import blackCart from './images/black-cart.png';

function ScreensEmptyCart() {
  return (
    <>
      <div className="purchase__btn">
        <button className="button button-primary" type="button" disabled>
          Purchase
        </button>
      </div>
      <div className="cart-empty">
        <img src={blackCart} alt="img" />
        <span>
          <b>Cart Empty...</b>
        </span>
      </div>
    </>
  );
}

export default ScreensEmptyCart;
