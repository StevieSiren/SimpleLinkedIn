import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { getCurrentProfile, deleteAccount } from '../../actions/profileActions';
import Spinner from '../common/Spinner';
import ProfileActions from './ProfileActions';

class Profile extends Component {
    
    componentDidMount() {
        this.props.getCurrentProfile();
    }

    onDeleteClick(e) {
      e.preventDefault();
      this.props.deleteAccount();
    }

  render() {
    const { user } = this.props.auth;
    const { profile, loading } = this.props.profile;

    let profileContent;

    if(profile === null || loading) {
      profileContent = <Spinner />
    } else {
      if(Object.keys(profile).length > 0) {
        profileContent = (
          <div className="mt-7">
            <h4><Link to={`/profile/${profile.handle}`}>{user.name}</Link></h4>
            <ProfileActions />
            <div className="mt-4">
              <button onClick={this.onDeleteClick.bind(this)} className="btn btn-danger">
                Delete Account
              </button>
            </div>
          </div>
        );
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
  deleteAccount: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired
}


const mapStateToProps = state => ({
  profile: state.profile,
  auth: state.auth
});


export default connect(mapStateToProps, { getCurrentProfile, deleteAccount })(Profile);
