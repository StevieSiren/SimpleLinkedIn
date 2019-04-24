import React, { Component } from 'react';

import Experience from '../Experience';
import Education from '../Education';

class ProfileAbout extends Component {

  

  render() {

    const { profile } = this.props;
    return (
      <div className="container">
        <div className="mt-6">
          <h3 className="h4 text-primary mb-4">User <strong>Bio</strong></h3>
          <p className="text-secondary">{profile.bio}</p>
        </div>
        <div class="text-center">
            <span class="u-divider u-divider--text my-5">BACKGROUND</span>
          </div>
        <div className="mt-6">
          <div className="mb-4">
          <h3 className="h4 text-primary mb-1"><strong>Experience</strong></h3>
          <small className="mt-1 mb-3">{profile.status} Level</small>
          </div>
          
          <Experience exp={profile.experience} />
        </div>
        <div className="mt-6">
          <div className="mb-4">
          <h3 className="h4 text-primary mb-1"><strong>Education</strong></h3>
          
          </div>
          
          <Education edu={profile.education} />
        </div>
      </div>
    )
  }
}


export default ProfileAbout;