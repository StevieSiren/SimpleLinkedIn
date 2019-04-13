import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { getCurrentProfile } from '../../actions/profileActions';
import Spinner from '../common/Spinner';

class Profile extends Component {
    
    componentDidMount() {
        this.props.getCurrentProfile();
    }

  render() {
    const { user } = this.props.auth;
    const { profile, loading } = this.props.profile;

    let profileContent;

    if(profile === null || loading) {
      profileContent = <Spinner />
    } else {
      if(Object.keys(profile).length > 0) {
        profileContent = <h4>Display profile</h4>
      } else {
        // Show CTA to create a profile
        profileContent = (
          <div>
            <p className="lead text-muted">Welcome, {user.name}!</p>
            <p>You haven't set up your profile yet. You can get started here.</p>
            <Link to="/create-profile" className="btn btn-lg btn-info">
              Create Profile
            </Link>
          </div>
        )
      }
    }

    return (
      <div className="profile">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="display-4">Profile</div>
              {profileContent}
            </div>
          </div>
        </div>
      </div>
    )
  }
}


Profile.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired
}


const mapStateToProps = state => ({
  profile: state.profile,
  auth: state.auth
});


export default connect(mapStateToProps, { getCurrentProfile })(Profile);
