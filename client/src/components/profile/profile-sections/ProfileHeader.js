import React, { Component } from 'react';

import isEmpty from '../../../validation/isEmpty';

class ProfileHeader extends Component {
  render() {

    const { profile } = this.props;

    return (
      <React.Fragment>
        <section className="space-lg-2 bg-primary">
          
        </section>
        <section className=" mt-4">
          <div className="container">
            <div className="row">
              <div className="col-lg-10 mx-auto col-sm-12">
                
                <div className="card">
                <div className="card-heading bg-primary">
                <div className="progress" style="height: 4px;">
                  <div className="progress-bar" role="progressbar" style="width: 25%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                </div>
                  <div className="card-body d-flex flex-column align-items-center p-5">
                  <img className="u-lg-avatar u-lg-avatar--bordered rounded-circle mb-3 mr-3 shadow" src={profile.user.avatar} alt="Image Description" />
                  <h5 className="h5 mb-1">{profile.user.name}</h5>
                  <p className="text-body">{profile.location}</p>
                  <small className="text-muted">{profile.status}</small>
                  </div>
                </div>
                
               
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    )
  }
}


export default ProfileHeader;