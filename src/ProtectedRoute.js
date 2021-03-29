import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

function ProtectedRoute({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={props => {
        if (localStorage.getItem('token')) {
          return (
            <>
              <Header />
              <main>
                <div className="container">
                  <Component {...props} />
                </div>
              </main>
              <Footer />
            </>
          );
        } else {
          return (
            <Redirect
              to={{
                pathname: '/login',
                state: { from: props.location }
              }}
            />
          );
        }
      }}
    />
  );
}

export default ProtectedRoute;
