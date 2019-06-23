import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import auth from './reducers/auth';
import common from './reducers/common';
import settings from './reducers/settings';

export default combineReducers({
  auth,
  common,
  settings,
  router: routerReducer
});
