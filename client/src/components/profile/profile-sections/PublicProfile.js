import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import ProfileHeader from './ProfileHeader';
import ProfileAbout from './ProfileAbout';
import ProfileCreds from './ProfileCreds';
import Spinner from '../../common/Spinner';

import { getProfileByHandle } from '../../../actions/profileActions';

class PublicProfile extends Component {

    componentDidMount() {
        if(this.props.match.params.handle) {
            this.props.getProfileByHandle(this.props.match.params.handle);
        }
    }

  render() {

    const { profile, loading } = this.props.profile;
    let profileContent;

    if(profile === null || loading) {
        profileContent = <Spinner />;
    } else {
        profileContent = (
            <div>
                <ProfileHeader profile={profile} />
                {/* <ProfileAbout profile={profile} /> */}
                {/* <ProfileCreds profile={profile} /> */}
            </div>
        )
    }

    return (
      <React.Fragment>
          
            {profileContent}
                
      </React.Fragment>
    )
  }
}


PublicProfile.propTypes = {
    profile: PropTypes.object.isRequired
};


const mapStateToProps = state => ({
    profile: state.profile,
    getProfileByHandle: PropTypes.func.isRequired
});


export default connect(mapStateToProps, { getProfileByHandle })(PublicProfile);
