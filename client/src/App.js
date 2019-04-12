import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';

import jwt_decode from 'jwt-decode';

import setAuthToken from './utils/setAuthToken';
import { setCurrentUser, logoutUser } from './actions/authActions';

import './App.css';
import './css/styles.css';

import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Landing from './components/layout/Landing';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import Profile from './components/profile/Profile';
import { clearCurrentProfile } from './actions/profileActions';


// Check for auth token
if(localStorage.jwtToken) {
  setAuthToken(localStorage.jwtToken);

  const decodedToken = jwt_decode(localStorage.jwtToken);
  // Set current user and isAuthenticated
  store.dispatch(setCurrentUser(decodedToken));

  // Check for expired token
  const currentTime = Date.now() / 1000;
  if(decodedToken.exp < currentTime) {
    store.dispatch(logoutUser());
    store.dispatch(clearCurrentProfile());

    // Redirect to login
    window.location.href = '/login';
  }
}


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Navbar />
              <Route exact path="/" component={ Landing } />
              <Route exact path="/register" component={ Register } />
              <Route exact path="/login" component={Login} />
              <Route exact path="/profile" component={Profile} />
            <Footer />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
