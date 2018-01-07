// without relative path, webpac will look for it in node_modules
import 'materialize-css/dist/css/materialize.min.css';

import React from 'react';
import ReactDOM from 'react-dom';
// Provider - a component that makes store accessible to every component in the app
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';

import App from './components/App';
import reducers from './reducers';
import axios from 'axios';
window.axios = axios;

const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

// render takes 2 arg - root component instance and
// the place where it should be renderd
ReactDOM.render(
  <Provider store={store}><App /></Provider>,
  document.querySelector('#root'));
