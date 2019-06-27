import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import auth from './reducers/auth';
import common from './reducers/common';
import settings from './reducers/settings';
import profile from './reducers/profile'

export default combineReducers({
  auth,
  common,
  settings,
  profile,
  router: routerReducer
});
