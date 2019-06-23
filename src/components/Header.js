import React from 'react';
import { Link } from 'react-router-dom';

const LoggedOutView = props => {
  if (!props.currentUser) {
    return (
      <ul className="nav navbar-nav pull-xs-right">

        <li className="nav-item">
          <Link to="/" className="nav-link">
            home
          </Link>
        </li>

        <li className="nav-item">
          <Link to="/login" className="nav-link">
            sign in
          </Link>
        </li>

        <li className="nav-item">
          <Link to="/register" className="nav-link">
            sign up
          </Link>
        </li>

      </ul>
    )
  }
  return null;
};

const LoggedInView = props => {
  if (props.currentUser) {
    return (
      <ul className="nav navbar-nav pull-xs-right">

        <li className="nav-item">
          <Link to="/" className="nav-link">
            home
          </Link>
        </li>

        <li className="nav-item">
          <Link to="/editor" className="nav-link">
            <i className="icon-compose"></i>&nbsp;new post
          </Link>
        </li>

        <li className="nav-item">
          <Link to="/settings" className="nav-link">
            <i className="icon-gear-a"></i>&nbsp;settings
          </Link>
        </li>

        <li className="nav-item">
          <Link to={`/@${props.currentUser.username}`} className="nav-link">
            <img src={props.currentUser.image} className="user-pic" alt={props.currentUser.username}/>
            {props.currentUser.username}
          </Link>
        </li>

      </ul>
    );
  }
  return null;
};

class Header extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-light">
        <div className="container">

          <Link to="/" className="navbar-brand">
            {this.props.appName.toLowerCase()}
          </Link>

          <LoggedOutView currentUser={this.props.currentUser} />
          <LoggedInView currentUser={this.props.currentUser} />

        </div>
      </nav>
    );
  }
}

export default Header;
