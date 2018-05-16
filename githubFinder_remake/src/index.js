import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import history from './history';
import { Router, Route } from 'react-router-dom';
// import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { fetchUser } from './middlewares';
import reducers from './reducers';
import VertificatorContainer from './containers/VertificatorContainer';
// import ResultContainer from './containers/ResultContainer'
import Main from './components/Main';
import Root404 from './components/Root404';
import Switch from 'react-router-dom/Switch';
// import registerServiceWorker from './registerServiceWorker';
const logger = createLogger();
// const reduxRouterMiddleware = routerMiddleware(history)
// const middlewares = [thunk, logger, reduxRouterMiddleware, fetchUser]
const middlewares = [thunk, logger, fetchUser]

// const reducer = combineReducers({...reducers, router:routerReducer});
const reducer = combineReducers({...reducers});

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(...middlewares))

const app = (
  <Provider store={store}>
    <MuiThemeProvider>
      {/* <ConnectedRouter history={history}> */}
      <Router history={history}>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/result" component={VertificatorContainer} />
          <Route component={Root404} />
        </Switch>
      </Router>
      {/* </ConnectedRouter> */}
    </MuiThemeProvider>
  </Provider >
);
ReactDOM.render(app, document.getElementById('root'));
// registerServiceWorker();
