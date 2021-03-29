/* eslint-disable consistent-return */
import React from 'react';
import { Route, Redirect } from 'react-router-dom';

function LoginRoute({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={props => {
        if (!localStorage.getItem('token')) {
          return <Component {...props} />;
        } else {
          return (
            <Redirect
              to={{ pathname: '/catalog', state: { from: props.location } }}
            />
          );
        }
      }}
    />
  );
}

export default LoginRoute;
