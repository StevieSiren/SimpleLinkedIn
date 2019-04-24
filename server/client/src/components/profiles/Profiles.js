import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Spinner from '../common/Spinner';
import ProfileItem from './ProfileItem';

import { getProfiles } from '../../actions/profileActions';

class Profiles extends Component {

    componentDidMount() {
        this.props.getProfiles();
    }

  render() {

    const { profiles, loading } = this.props.profile;
    let profileItems;

    if(profiles === null || loading) {
        profileItems = <Spinner />
    } else {
        if(profiles.length > 0) {
            profileItems = profiles.map(profile => (
                <ProfileItem key={profile._id} profile={profile} />
            ))
        } else {
            profileItems = <h4>No profiles exist.</h4>
        }
    }

    return (
      <React.Fragment>
          <div className="container space-lg-3">
            <div className="row">
                <div className="col-md-12">
                    <h1 className="h4 text-left text-primary">All <strong>Profiles</strong></h1>
                    
                    {profileItems}
                </div>
            </div>
          </div>
      </React.Fragment>
    )
  }
}


Profiles.propTypes = {
    getProfiles: PropTypes.func.isRequired,
    profile: PropTypes.object.isRequired
}


const mapStateToProps = state => ({
    profile: state.profile
})



export default connect(mapStateToProps, { getProfiles })(Profiles);