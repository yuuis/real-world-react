import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';
import { store, history } from './store';
import { Provider } from 'react-redux';

// ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render((
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Switch>
        <Route path="/" component={App} />
      </Switch>
    </ConnectedRouter>
  </Provider>
), document.getElementById('root'));
