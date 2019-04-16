import React, { Component } from 'react';

import isEmpty from '../../../validation/isEmpty';

class ProfileHeader extends Component {
  render() {

    const { profile } = this.props;

    return (
      <div className="row">
        <div className="col-md-12">
            {profile.user.name}
        </div>
      </div>
    )
  }
}


export default ProfileHeader;