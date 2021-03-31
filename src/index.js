import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';
import { rootReducer } from './redux/reducers/rootReducer';
import App from './App';
import './index.css';

const store = createStore(rootReducer, composeWithDevTools());

render(
  <Provider store={store}>
    <Router basename="/JS-Band-store">
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);
