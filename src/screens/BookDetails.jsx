import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import fetchClient from '../models/FetchClient';
import './styles/book_details.scss';

function ScreensBookDetails() {
  const { id } = useParams();
  const [bookInfo, setBookInfo] = useState({});
  const countInput = useRef();
  const totalPrice = useRef();
  useEffect(() => {
    fetchClient.getBookById(localStorage.getItem('token'), id).then(res => {
      console.log(res);
      setBookInfo(prev => {
        return { ...prev, ...res };
      });
    });
  }, []);

  const countInputHandler = () => {
    totalPrice.current.textContent = bookInfo.price
      ? (bookInfo.price * countInput.current.value).toFixed(2)
      : '';
  };
  return (
    <div className="book">
      <div className="book__wrap">
        <div className="book__wrap-image">
          <div>
            <img src={bookInfo.cover} alt="img" className="book__image" />
          </div>
          <div className="book__description">{bookInfo.description}</div>
        </div>
        <div className="book__details">
          <p className="book__details-title">{bookInfo.title}</p>
          <p className="book__details-author">{bookInfo.author}</p>
          <p className="book__tags">
            {bookInfo.tags &&
              bookInfo.tags.map((tag, i) => <span key={i}>{tag}</span>)}
          </p>
        </div>
      </div>
      <div className="book__order">
        <div className="book__order-price">
          <p>
            <b>Price, $</b>
          </p>
          <span>{bookInfo.price}</span>
        </div>
        <div className="book__order-count">
          <p>
            <b>Count</b>
          </p>
          <input
            onInput={countInputHandler}
            ref={countInput}
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
          <span ref={totalPrice} />
        </div>
        <button className="button button-primary" type="button">
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ScreensBookDetails;
