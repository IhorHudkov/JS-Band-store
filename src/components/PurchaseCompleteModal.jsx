import React from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { emptyCart } from '../redux/actions';
import './styles/purchase-complete-modal.scss';

function PurchaseCompleteModal({ visible }) {
  const dispatch = useDispatch();
  const state = useSelector(store => store.cart);

  const closeLinkClickHandler = () => {
    dispatch(emptyCart());
  };

  if (visible) {
    return (
      <div className="modal">
        <div className="modal-overlay">
          <div className="container">
            <div className="modal-window">
              <div className="modal-window__inner">
                <table className="cart-table">
                  <tbody>
                    <tr>
                      <th>Name</th>
                      <th>Count</th>
                      <th>Price</th>
                      <th>Total</th>
                    </tr>
                    {state.books.map((book, i) => {
                      return (
                        <tr key={book.id + i}>
                          <td>{book.title}</td>
                          <td>{book.quantity}</td>
                          <td>{book.price}</td>
                          <td>{(book.quantity * book.price).toFixed(2)}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
              <div className="row__total-price">
                <span>Total Price: {state.totalPrice.toFixed(2)}$</span>
              </div>
              <div className="close-btn">
                <Link to="/catalog" onClick={closeLinkClickHandler}>
                  Close
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return <></>;
  }
}

export default connect()(PurchaseCompleteModal);
