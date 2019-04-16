import React, { Component } from 'react'

class ProfileAbout extends Component {

  

  render() {

    const { profile } = this.props;
    return (
      <div>
        <h1>{profile.company} This is the company</h1>
      </div>
    )
  }
}


export default ProfileAbout;