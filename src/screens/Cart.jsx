import { React, useState } from 'react';
import { useSelector, connect } from 'react-redux';
import PurchaseCompleteModal from '../components/PurchaseCompleteModal';
import ScreensEmptyCart from './EmptyCart';
import './styles/cart.scss';

function ScreensCart() {
  const state = useSelector(store => store.cart);
  const [modalVisible, setModalVisible] = useState(false);
  const purchaseBtnClickHandler = () => {
    setModalVisible(true);
  };
  if (state.totalPrice) {
    return (
      <>
        <div className="purchase__btn">
          <button
            className="button button-primary"
            type="button"
            onClick={purchaseBtnClickHandler}
          >
            Purchase
          </button>
        </div>
        <table className="cart-table">
          <tbody>
            <tr>
              <th>Name</th>
              <th>Count</th>
              <th>Price</th>
              <th>Total</th>
            </tr>
            {state.books.map(book => {
              return (
                <tr key={book.id}>
                  <td>{book.title}</td>
                  <td>{book.quantity}</td>
                  <td>{book.price}</td>
                  <td>{(book.quantity * book.price).toFixed(2)}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <div className="total-price">
          <span>Total Prise: {state.totalPrice.toFixed(2)}$</span>
        </div>
        <PurchaseCompleteModal visible={modalVisible} />
      </>
    );
  } else {
    return <ScreensEmptyCart />;
  }
}

export default connect()(ScreensCart);
