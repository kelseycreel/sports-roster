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
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <span className="navbar-brand" href="#">Vanderbilt Sports Roster</span>
          <button className="navbar-toggler" type="button" data-toggle="collapse" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            </ul>
            <div className="form-inline my-2 my-lg-0">
              {
                (auth) && (<button className="nav-link btn btn-outline-light" onClick={this.logOutEvent}>Logout</button>)
              }
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default MyNavbar;
