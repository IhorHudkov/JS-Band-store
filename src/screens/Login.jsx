import { React, useEffect, useRef, useState } from 'react';
import { Redirect } from 'react-router-dom';
import './styles/login.scss';
import man from './images/man.svg';
import User from '../models/User';
import fetchClient from '../models/FetchClient';

function ScreensLogin() {
  const [token, setToken] = useState('');
  const form = useRef(null);
  useEffect(() => {
    form.current.onsubmit = e => {
      e.preventDefault();
      const user = new User(form.userName);
      fetchClient.signIn(user).then(
        () => {
          localStorage.setItem('token', user.token);
          setToken(user.token);
        },
        error => console.log(error.message)
      );
    };
  }, []);

  if (token) {
    return <Redirect to="/catalog" />;
  }
  return (
    <div className="wrapper">
      <img src={man} alt="man" />
      <h3>Js Band Store</h3>
      <form ref={form}>
        <label htmlFor="userName">Name</label>
        <input type="text" id="userName" />
        <button type="submit">Log In</button>
      </form>
    </div>
  );
}

export default ScreensLogin;
