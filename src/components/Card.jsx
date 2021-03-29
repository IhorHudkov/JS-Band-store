import React, { useEffect, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import './styles/card.scss';

function Card({ img, title, author, price, key, id }) {
  const history = useHistory();
  const button = useRef(null);
  useEffect(() => {
    button.current.onclick = () => {
      history.push(`/catalog/${id}`);
    };
  }, []);
  return (
    <div className="card" key={key}>
      <img src={img} alt="img" className="card__img" height="180px" />
      <p className="card__title">{title}</p>
      <p className="card__author">{author}</p>
      <div className="card__wrap">
        <span>{price}$</span>
        <button ref={button} className="card__btn" type="button">
          View
        </button>
      </div>
    </div>
  );
}

export default Card;
