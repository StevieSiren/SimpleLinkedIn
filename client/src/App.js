import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';

import jwt_decode from 'jwt-decode';

import setAuthToken from './utils/setAuthToken';
import { setCurrentUser } from './actions/authActions';

import './App.css';
import './css/styles.css';

import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Landing from './components/layout/Landing';
import Register from './components/auth/Register';
import Login from './components/auth/Login';


// Check for auth token
if(localStorage.jwtToken) {
  setAuthToken(localStorage.jwtToken);

  const decodedToken = jwt_decode(localStorage.jwtToken);
  // Set current user and isAuthenticated
  store.dispatch(setCurrentUser(decodedToken));
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
            <Footer />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
