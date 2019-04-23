import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import isEmpty from '../../validation/isEmpty';

class ProfileItem extends Component {
  render() {

    const { profile } = this.props;

    return (
      <div className="card card-body mb-3">
        <div className="d-flex">
            <div className="media mr-3">
                <img src={profile.user.avatar} alt="" className="u-avatar rounded-circle"/>
            </div>
            <div className="media-body">
                <h3 className="h5">{profile.user.name}</h3>
                <p>{profile.status} 
                {isEmpty(profile.company) ? null : (<span> <em>at</em> {profile.company}</span>)}</p>
                {/* <p>{isEmpty(profile.location) ? null : (<span>{profile.location}</span>)}</p> */}
                <Link to={`/profile/${profile.handle}`} className="btn btn-soft-secondary">View Profile</Link>
            </div>
            <div className="media-body ml-auto col-md-4 d-none d-md-block">
                <h4 className="h5 text-primary">Top <strong>Skills</strong></h4>
                <ul className="list-group">
                    {profile.skills.slice(0, 4).map((skill, i) => (
                        <li key={i} className="list-group-item">{skill}</li>
                    ))}
                </ul>
            </div>
        </div>
      </div>
    )
  }
}


ProfileItem.propTypes = {
    profile: PropTypes.object.isRequired
};


export default ProfileItem;
