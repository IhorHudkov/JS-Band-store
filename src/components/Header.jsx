import React, { useEffect, useRef } from 'react';
import { Link, useHistory } from 'react-router-dom';
import logo from './images/logo.png';
import cart from './images/cart.png';
import './styles/header.scss';

function Header() {
  const button = useRef(null);
  const history = useHistory();
  useEffect(() => {
    button.current.onclick = () => {
      localStorage.removeItem('token');
      history.push('./login');
    };
  }, []);
  return (
    <header className="header">
      <div className="header__top">
        <div className="container">
          <div className="header__top-inner">
            <span id="currentUserName" />
            <button type="button" ref={button}>
              sign out
            </button>
          </div>
        </div>
      </div>
      <div className="header__bottom">
        <div className="container">
          <div className="header__bottom-inner">
            <Link to="/catalog">
              <img src={logo} height="80px" alt="logo" />
            </Link>
            <Link to="/cart">
              <img src={cart} height="30px" alt="cart" />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
