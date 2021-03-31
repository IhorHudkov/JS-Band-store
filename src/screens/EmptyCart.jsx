import React from 'react';
import './styles/empty_cart.scss';
import blackCart from './images/black-cart.png';

const btnStyles = {
  background: '#d1d1d1',
  borderColor: '#d1d1d1'
};

function ScreensEmptyCart() {
  return (
    <>
      <div className="purchase__btn">
        <button
          className="button button-primary"
          type="button"
          disabled
          style={btnStyles}
        >
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
