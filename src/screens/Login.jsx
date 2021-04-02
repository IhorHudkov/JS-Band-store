import { React, useEffect, useRef, useState } from 'react';
import { Redirect } from 'react-router-dom';
import './styles/login.scss';
import man from './images/man.svg';
import User from '../models/User';
import fetchClient from '../models/FetchClient';

function ScreensLogin() {
  const [token, setToken] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const form = useRef(null);

  useEffect(() => {
    form.current.onsubmit = e => {
      e.preventDefault();
      if (
        form.current.userName.value.trim().length < 4 ||
        form.current.userName.value.trim().length > 16
      ) {
        setErrorMessage(
          <p style={{ color: '#ff0000' }}>Username is not valid</p>
        );
      } else {
        const user = new User(form.current.userName.value);
        fetchClient.signIn(user).then(
          () => {
            localStorage.setItem('token', user.token);
            setToken(user.token);
          },
          error => console.log(error.message)
        );
      }
    };
  }, []);

  const inputFocusHandler = () => {
    setErrorMessage('');
  };

  if (token) {
    return <Redirect to="/catalog" />;
  }
  return (
    <div className="wrapper">
      <img src={man} alt="man" />
      <h3>Js Band Store</h3>
      <span>{errorMessage}</span>
      <form ref={form}>
        <label htmlFor="userName">Name</label>
        <input
          type="text"
          id="userName"
          name="userName"
          placeholder="4 to 16 characters"
          onFocus={inputFocusHandler}
        />
        <button type="submit">Log In</button>
      </form>
    </div>
  );
}

export default ScreensLogin;
