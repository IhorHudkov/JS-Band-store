/* eslint-disable no-return-assign */
import React, { useEffect, useState } from 'react';
import fetchClient from '../models/FetchClient';
import Card from '../components/Card';
import './styles/icomoon.css';
import './styles/catalog.scss';

function ScreensCatalog() {
  const [books, setBooks] = useState([]);

  useEffect(async () => {
    let cleanupFunction = false;
    try {
      const res = await fetchClient.getAllBooks(localStorage.getItem('token'));
      if (!cleanupFunction)
        setBooks(prev => {
          return prev.concat(res);
        });
    } catch (e) {
      console.log(e.message);
    }
    return () => (cleanupFunction = true);
  }, []);

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
        {books.map((book, i) => {
          return (
            <Card
              id={book.id}
              img={book.cover}
              title={book.title}
              author={book.author}
              price={book.price}
              key={book.id ? `${i}${book.id}` : i}
            />
          );
        })}
      </div>
    </>
  );
}

export default ScreensCatalog;
