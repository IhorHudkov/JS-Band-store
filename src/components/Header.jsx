import React from 'react';
import logo from './images/logo.png';
import cart from './images/cart.png';
import './styles/header.scss';

function Header() {
  return (
    <header className="header">
      <div className="header__top">
        <div className="container">
          <div className="header__top-inner">
            <span id="currentUserName" />
            <button type="button">sign out</button>
          </div>
        </div>
      </div>
      <div className="header__bottom">
        <div className="container">
          <div className="header__bottom-inner">
            <a href="https://google.com">
              <img src={logo} height="80px" alt="logo" />
            </a>
            <a href="https://google.com">
              <img src={cart} height="30px" alt="cart" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
