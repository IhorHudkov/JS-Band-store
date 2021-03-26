import React from 'react';
import './styles/login.scss';
import man from './images/man.svg';

function ScreensLogin() {
  return (
    <div className="wrapper">
      <img src={man} alt="man" />
      <h3>Js Band Store</h3>
      <form>
        <label htmlFor="userName">Name</label>
        <input type="text" id="userName" />
        <button type="submit">Log In</button>
      </form>
    </div>
  );
}

export default ScreensLogin;
