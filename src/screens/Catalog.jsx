import React from 'react';
import './styles/icomoon.css';
import './styles/catalog.scss';
import bookCover from './images/book_cover.jpg';

function ScreensCatalog() {
  return (
    <>
      <div className="row mgtop-3rem">
        <div className="search two-thirds column">
          <input
            type="search"
            placeholder="&#xe900;"
            className="icon-magnifying-glass"
          />
        </div>
        <div className="filter one-third column">
          <select className="u-full-width" id="exampleRecipientInput">
            <option value="Option 1">Price</option>
            <option value="Option 2">0...25$</option>
            <option value="Option 3">25...50$</option>
            <option value="Option 3">over 50$</option>
          </select>
        </div>
      </div>
      <div className="catalog">
        <div className="card">
          <img src={bookCover} alt="img" className="card__img" height="180px" />
          <p className="card__title">
            <h5>Book of books</h5>
          </p>
          <p className="card__author">
            <h6>Many authors</h6>
          </p>
          <div className="card__wrap">
            <span>15$</span>
            <button className="card__btn" type="button">
              View
            </button>
          </div>
        </div>
        <div className="card">
          <img src={bookCover} alt="img" className="card__img" height="180px" />
          <p className="card__title">
            <h5>Book of books</h5>
          </p>
          <p className="card__author">
            <h6>Many authors</h6>
          </p>
          <div className="card__wrap">
            <span>15$</span>
            <button className="card__btn" type="button">
              View
            </button>
          </div>
        </div>{' '}
        <div className="card">
          <img src={bookCover} alt="img" className="card__img" height="180px" />
          <p className="card__title">
            <h5>Book of books</h5>
          </p>
          <p className="card__author">
            <h6>Many authors</h6>
          </p>
          <div className="card__wrap">
            <span>15$</span>
            <button className="card__btn" type="button">
              View
            </button>
          </div>
        </div>{' '}
        <div className="card">
          <img src={bookCover} alt="img" className="card__img" height="180px" />
          <p className="card__title">
            <h5>Book of books</h5>
          </p>
          <p className="card__author">
            <h6>Many authors</h6>
          </p>
          <div className="card__wrap">
            <span>15$</span>
            <button className="card__btn" type="button">
              View
            </button>
          </div>
        </div>{' '}
        <div className="card">
          <img src={bookCover} alt="img" className="card__img" height="180px" />
          <p className="card__title">
            <h5>Book of books</h5>
          </p>
          <p className="card__author">
            <h6>Many authors</h6>
          </p>
          <div className="card__wrap">
            <span>15$</span>
            <button className="card__btn" type="button">
              View
            </button>
          </div>
        </div>
        <div className="card">
          <img src={bookCover} alt="img" className="card__img" height="180px" />
          <p className="card__title">
            <h5>Book of books</h5>
          </p>
          <p className="card__author">
            <h6>Many authors</h6>
          </p>
          <div className="card__wrap">
            <span>15$</span>
            <button className="card__btn" type="button">
              View
            </button>
          </div>
        </div>
        <div className="card">
          <img src={bookCover} alt="img" className="card__img" height="180px" />
          <p className="card__title">
            <h5>Book of books</h5>
          </p>
          <p className="card__author">
            <h6>Many authors</h6>
          </p>
          <div className="card__wrap">
            <span>15$</span>
            <button className="card__btn" type="button">
              View
            </button>
          </div>
        </div>
        <div className="card">
          <img src={bookCover} alt="img" className="card__img" height="180px" />
          <p className="card__title">
            <h5>Book of books</h5>
          </p>
          <p className="card__author">
            <h6>Many authors</h6>
          </p>
          <div className="card__wrap">
            <span>15$</span>
            <button className="card__btn" type="button">
              View
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ScreensCatalog;
