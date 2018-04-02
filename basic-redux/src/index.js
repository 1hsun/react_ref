import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import itemApp from './reducer';
import MyComponent from './app';
import fetchMiddleware from './fetchmiddleware'
/*
# Store, store = createStore(reducer)
const store = createStore(addItem)
const store = createStore(dealItem, applyMiddleware(fetchMiddleware))
using redux dev tools by following:
*/
const store = createStore(itemApp, window.window.__REDUX_DEVTOOLS_EXTENSION__ &&  window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(fetchMiddleware));
//Provider do connect redux and react.
ReactDOM.render(
  <Provider store={store}>
    <MyComponent />
  </Provider>,
  document.getElementById('root')
)