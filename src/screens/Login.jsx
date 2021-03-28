import { React, useEffect } from 'react';
import './styles/login.scss';
import man from './images/man.svg';
import User from '../models/User';
import fetchClient from '../models/FetchClient';

function ScreensLogin() {
  useEffect(() => {
    const user = new User('Vasya');
    fetchClient.signIn(user).then(
      () => {
        console.log(user.token);
        fetchClient.getAllBooks(user.token).then(res => console.log(res));
        fetchClient.getBookById(user.token, 1).then(res => console.log(res));
        fetchClient.buyBooks(user.token, 1).then(res => console.log(res));
      },
      error => console.log(error.message)
    );
  }, []);
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
