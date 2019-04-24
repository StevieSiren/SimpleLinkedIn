import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { logoutUser } from "../../actions/authActions";
import { clearCurrentProfile } from '../../actions/profileActions';


class Navbar extends Component {

  onLogoutClick(e) {
    e.preventDefault();
    this.props.clearCurrentProfile();
    this.props.logoutUser();
  }


  render() {
    const { isAuthenticated } = this.props.auth;

    const authLinks = (
      <ul className="navbar-nav ml-auto">
      
        <li className="nav-item">
          <Link className="nav-link" to="/profile">
          <i class="fas fa-id-card mr-1"></i> My Profile
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/feed">
          <i class="far fa-comment-dots mr-1"></i> Feed
          </Link>
        </li>
        {/* <li className="nav-item">
          <Link className="nav-link" to="/profiles">
            All Profiles
          </Link>
        </li> */}
          <li className="nav-item">
            <Link onClick={this.onLogoutClick.bind(this)} className="nav-link">
            
            <i class="fas fa-sign-out-alt mr-1"></i> Logout</Link>
          </li>
      </ul>


    );

    const guestLinks = (
      <ul className="navbar-nav ml-auto">
        <li className="nav-item active">
          <Link className="nav-link" to="/login">
            Login
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link btn btn-sm btn-outline-primary text-primary" to="/register">
            Sign Up
          </Link>
        </li>
      </ul>
    );

    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top" style={{boxShadow: '0 4px 3px rgba(0, 0, 0, 0.1)'}}>
        <div className="container">
        <Link className="navbar-brand" to="/">
          LinkedOut
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          {isAuthenticated ? authLinks : guestLinks}
        </div>
        </div>
      </nav>
    );
  }
}

Navbar.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser, clearCurrentProfile }
)(Navbar);
