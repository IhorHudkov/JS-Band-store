import React from 'react';
import { Link } from 'react-router-dom';

function ScreensNotFound() {
  return (
    <div>
      <h1>404 - Not Found!</h1>
      <Link
        to={() => {
          if (localStorage.getItem('token')) {
            return '/catalog';
          } else {
            return '/';
          }
        }}
      >
        Go Home
      </Link>
    </div>
  );
}

export default ScreensNotFound;
