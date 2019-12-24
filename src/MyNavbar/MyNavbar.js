import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import PropTypes from 'prop-types';

import './MyNavbar.scss';

class MyNavbar extends React.Component {
  static propTypes = {
    auth: PropTypes.bool,
  }

  logOutEvent = (e) => {
    e.preventDefault();
    firebase.auth().signOut();
  }

  render() {
    const { auth } = this.props;

    return (
      <div className="MyNavbar">
        <nav className="navbar navbar-expand-lg bg-dark d-flex justify-content-between">
          <span className="navbar-brand" href="#">Vanderbilt Baseball Roster</span>
            <div className="form-inline my-2 my-lg-0">
              {
                (auth) && (<button className="nav-link btn btn-outline-light" onClick={this.logOutEvent}>Logout</button>)
              }
            </div>
        </nav>
      </div>
    );
  }
}

export default MyNavbar;
