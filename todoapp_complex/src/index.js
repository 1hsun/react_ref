import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { fetchItems, addItem, updateItem, delItem } from './middlewares'
import { Provider } from 'react-redux';
import * as reducers from './reducers'
import App from './components/App';
// import registerServiceWorker from './registerServiceWorker';
/*
# Reducer
const reducer - combineReducers({
  searchedKeyword, filterOut, sortType, items
});
*/
const reducer = combineReducers({
  ...reducers
});
//# Store
/*
const store = createStore(reducer, applyMiddleware())
use redux dev tool
*/
const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(fetchItems, addItem, updateItem, delItem))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  ,document.getElementById('root'));
// registerServiceWorker();
