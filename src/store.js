import reducer from './reducer';
import { applyMiddleware, createStore } from 'redux';
import { createBrowserHistory as createHistory } from 'history';
import { createLogger } from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import { promiseMiddleware, localStorageMiddleware } from './middleware';
import { routerMiddleware } from 'react-router-redux'

export const history = createHistory();

const myRouterMiddleware = routerMiddleware(history);

const getMiddleware = () => {
  if (process.env.NODE_ENV  === 'production') {
    return applyMiddleware(myRouterMiddleware, promiseMiddleware, localStorageMiddleware);
  } else {
    return applyMiddleware(myRouterMiddleware, promiseMiddleware, localStorageMiddleware, createLogger);
  }
};

export const store = createStore(reducer, composeWithDevTools(getMiddleware()));
