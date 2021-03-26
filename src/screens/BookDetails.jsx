import React from 'react';
import './styles/book_details.scss';

function ScreensBookDetails() {
  return (
    <div className="book">
      <div className="book__wrap">
        <div className="book__wrap-image">
          <div className="book__image" />
          <div className="book__description">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora
            autem consectetur rem? Reiciendis, enim voluptates.
          </div>
        </div>
        <div className="book__details">
          <p>
            <h4>Book name</h4>
          </p>
          <p>
            <h6>Author</h6>
          </p>
          <p className="book__tags">Bestseller, Top</p>
        </div>
      </div>
      <div className="book__order">
        <div className="book__order-price">
          <p>
            <b>Price, $</b>
          </p>
          <span>17</span>
        </div>
        <div className="book__order-count">
          <p>
            <b>Count</b>
          </p>
          <input
            type="number"
            min="0"
            max=""
            id="book-counter"
            placeholder="Desired quantity"
          />
        </div>
        <div className="book__order-total-price">
          <p>
            <b>Total Price, $</b>
          </p>
          <span>51</span>
        </div>
        <button className="button button-primary" type="button">
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ScreensBookDetails;
