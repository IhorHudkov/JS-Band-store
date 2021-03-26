import React from 'react';
import './styles/purchase-complete-modal.scss';

function PurchaseCompleteModal() {
  return (
    <div className="modal">
      <div className="modal-overlay">
        <div className="container">
          <div className="modal-window">
            <div className="modal-window__inner">
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
            </div>
            <div className="row__total-price">
              <span>Total Price: 120$</span>
            </div>
            <div className="close-btn">
              <a href="https://google.com">Close</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PurchaseCompleteModal;
