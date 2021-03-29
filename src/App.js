import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';
import LoginRoute from './LoginRoute';
import {
  ScreensNotFound,
  ScreensLogin,
  ScreensCatalog,
  ScreensCart,
  ScreensBookDetails
} from './screens';

function App() {
  return (
    <>
      <Switch>
        <LoginRoute path="/login" component={ScreensLogin} />
        <Redirect exact from="/" to="/login" />
        <ProtectedRoute
          exact
          path="/catalog/:id"
          component={ScreensBookDetails}
        />
        <ProtectedRoute path="/cart" component={ScreensCart} />
        <ProtectedRoute path="/catalog" component={ScreensCatalog} />
        <Route path="/not-found" component={ScreensNotFound} />
        <Redirect from="*" to="/not-found" />
      </Switch>
    </>
  );
}

export default App;
