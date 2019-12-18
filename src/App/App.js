import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';

import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNavbar from '../MyNavbar/MyNavbar';
import Auth from '../Auth/Auth';
import Team from '../Team/Team';
import firebaseConnection from '../helpers/data/firebaseConnection';

firebaseConnection.firebaseApp();

class App extends React.Component {
  state = {
    auth: false,
  }

  componentDidMount() {
    this.removeListener = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ auth: true });
      } else {
        this.setState({ auth: false });
      }
    });
  }

  componentWillUnmount() {
    this.removeListener();
  }

  renderView = () => {
    const { auth } = this.state;
    if (!auth) {
      return (<Auth />);
    }
    return (<Team />);
  }

  render() {
    const { auth } = this.state;

    return (
      <div className="App">
        <MyNavbar auth={auth} />
        {
          this.renderView()
        }
      </div>
    );
  }
}

export default App;
