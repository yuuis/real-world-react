import React from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { push } from 'react-router-redux';
import Header from './Header';
import {APP_LOAD, REDIRECT} from "../constants/actionTypes";
import { store } from '../store';
import agent from '../agent';
import Login from '../components/Login';
import Register from '../components/Register';
import Settings from '../components/Settings';
import Profile from '../components/Profile';

const mapStateToProps = state => {
  return {
    appName: state.common.appName,
    currentUser: state.common.currentUser,
  }};

const mapDispatchToProps = dispatch => ({
  onLoad: (payload, token) =>
    dispatch({ type: APP_LOAD, payload, token, skipTracking: true }),
  onRedirect: () =>
    dispatch({ type: REDIRECT })
});

class App extends React.Component {
  componentWillReceiveProps(nextProps) {
    store.dispatch(push(nextProps.redirectTo));
    this.props.onRedirect();
  }

  componentWillMount() {
    const token = window.localStorage.getItem('jwt');
    if (token) {
      agent.setToken(token);
    }

    this.props.onLoad(token ? agent.Auth.current() : null, token)
  }

  render() {
    if (this.props.appLoaded) {
      return (
        <div>
          <Header
            appName={this.props.appName}
            currentUser={this.props.currentUser} />
            <Switch>
              <Route path="/login" component={Login}/>
              <Route path="/register" component={Register} />
              <Route path="/settings" component={Settings} />
              <Route path="/@:username" component={Profile} />
            </Switch>
        </div>
      )
    }
    return (
      <div>
        <Header
          appName={this.props.appName}
          currentUser={this.props.currentUser} />
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
