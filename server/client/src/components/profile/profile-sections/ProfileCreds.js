import React, { Component } from 'react'

class ProfileCreds extends Component {
  render() {

    const { profile } = this.props;

    return (
      <div>
        <h1>{profile.bio}</h1>
      </div>
    )
  }
}


export default ProfileCreds;