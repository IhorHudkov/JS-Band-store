import React from 'react';
import './styles/cart.scss';

function ScreensCart() {
  return (
    <>
      <div className="purchase__btn">
        <button className="button button-primary" type="button">
          Purchase
        </button>
      </div>
      <table className="cart-table">
        <tr>
          <th>Name</th>
          <th>Count</th>
          <th>Price</th>
          <th>Total</th>
        </tr>
        <tr>
          <td>BigBen</td>
          <td>10</td>
          <td>17</td>
          <td>23</td>
        </tr>
        <tr>
          <td>BigBen</td>
          <td>10</td>
          <td>17</td>
          <td>23</td>
        </tr>
      </table>
      <div className="total-price">
        <span>Total Prise: 173$</span>
      </div>
    </>
  );
}

export default ScreensCart;
