/* eslint-disable no-return-assign */
import React, { useEffect, useRef, useState } from 'react';
import { useHistory } from 'react-router-dom';
import fetchClient from '../models/FetchClient';
import Card from '../components/Card';
import './styles/icomoon.css';
import './styles/catalog.scss';

function ScreensCatalog() {
  const [allBooks, setAllBooks] = useState([]);
  const [books, setBooks] = useState([]);
  const [searchResult, setSearchResult] = useState([]);
  const history = useHistory();
  const select = useRef();
  const searchInput = useRef();

  useEffect(async () => {
    let cleanupFunction = false;
    try {
      const res = await fetchClient.getAllBooks(localStorage.getItem('token'));
      if (res.message === 'Unauthorized') {
        localStorage.removeItem('token');
        history.push('/login');
      }
      if (!cleanupFunction) {
        setBooks(prev => {
          return prev.concat(res);
        });
        setAllBooks(prev => {
          return prev.concat(res);
        });
        setSearchResult(prev => {
          return prev.concat(res);
        });
      }
    } catch (e) {
      console.log(e.message);
    }
    return () => (cleanupFunction = true);
  }, []);

  const onChangePriceHandler = () => {
    const booksList = select.current.value ? searchResult : books;
    switch (select.current.value) {
      case 'All':
        setAllBooks(booksList);
        break;
      case '0...25':
        setAllBooks(booksList.filter(book => book.price <= 25));
        break;
      case '25...50':
        setAllBooks(
          booksList.filter(book => book.price > 25 && book.price <= 50)
        );
        break;
      case 'over 50':
        setAllBooks(booksList.filter(book => book.price > 50));
        break;

      default:
        break;
    }
  };

  const onSearchHandler = () => {
    setSearchResult(
      books.filter(book => book.title.includes(searchInput.current.value))
    );
    setAllBooks(searchResult);
    onChangePriceHandler();
  };

  const onKeyUpSearchHandler = e => {
    console.log(e.keyCode);
    if (
      e.keyCode === 46 ||
      e.keyCode === 8 ||
      e.keyCode === 13 ||
      e.keyCode === 32 ||
      (e.ctrlKey && e.keyCode === 90)
    ) {
      onSearchHandler();
    }
  };

  return (
    <>
      <div className="row mgtop-3rem">
        <div className="search two-thirds column">
          <input
            ref={searchInput}
            type="search"
            placeholder="&#xe900;"
            className="icon-magnifying-glass"
            onChange={onSearchHandler}
            onKeyUp={onKeyUpSearchHandler}
            onInput={onChangePriceHandler}
          />
        </div>
        <div className="filter one-third column">
          <select
            className="u-full-width"
            id="exampleRecipientInput"
            onChange={onChangePriceHandler}
            ref={select}
          >
            <option value="All">Price</option>
            <option value="0...25">0...25$</option>
            <option value="25...50">25...50$</option>
            <option value="over 50">over 50$</option>
          </select>
        </div>
      </div>
      <div className="catalog">
        {allBooks ? (
          allBooks.map((book, i) => {
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
          })
        ) : (
          <p>Nothing found :(</p>
        )}
      </div>
    </>
  );
}

export default ScreensCatalog;
