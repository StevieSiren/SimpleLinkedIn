import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const ProfileSnapshot = ({
    profile
}) => {
  return (
    <React.Fragment>
    <div className="row">
        <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
        <div className="card p-1 mb-4">
            <div className="card-body text-center">
                <div className="mb-3">
                    <img src={profile.user.avatar} alt="" className="u-lg-avatar rounded-circle"/>
                </div>
                <div className="mb-3">
                    <h1 className="h6 font-weight-medium mb-0">
                        {profile.user.name}
                    </h1>
                    <small className="d-block text-muted">{profile.status}</small>
                </div>
                <div className="mb-2">
                    <Link to="/edit-profile" className="btn btn-sm btn-soft-secondary transition-3d-hover"><span className="mr-2 far fa-edit"></span>Edit Profile</Link>
                </div>
                <small><Link to={`profile/${profile.handle}`} className="text-primary">View Public Profile</Link></small>
            </div>
        </div>
    </div>
    <div className="col-md-9 mb-4 mb-lg-0 d-flex flex-column justify-content-center">
    
        <div className="row justify-content-between">
        
            <div className="col">
                <ul className="list-group list-group-transparent list-group-flush list-group-borderless mb-0">
                    <li className="list-group-item pt-0 pb-4">
                        <div className="media">
                            <span className="fas fa-envelope list-group-icon mr-3"></span>
                            <div className="media-body text-lh-sm">
                                <span className="d-block mb-1">Email:</span>
                                <p>{profile.user.email}</p>
                            </div>
                        </div>
                    </li>
                    <li className="list-group-item pt-0 pb-4">
                        <div className="media">
                            <span className="fas fa-link list-group-icon mr-3"></span>
                            <div className="media-body text-lh-sm">
                                <span className="d-block mb-1">Handle:</span>
                                <p>{profile.handle}</p>
                            </div>
                        </div>
                    </li>
                    
                </ul>
            </div>
            <div className="col">
                <ul className="list-group list-group-transparent list-group-flush list-group-borderless mb-0">
                    <li className="list-group-item pt-0 pb-4">
                        <div className="media">
                            <span className="fas fa-search-location list-group-icon mr-3"></span>
                            <div className="media-body text-lh-sm">
                                <span className="d-block mb-1">Location:</span>
                                <p>{profile.location}</p>
                            </div>
                        </div>
                    </li>
                    <li className="list-group-item pt-0 pb-4">
                        <div className="media">
                            <span className="fas fa-building list-group-icon mr-3"></span>
                            <div className="media-body text-lh-sm">
                                <span className="d-block mb-1">Company:</span>
                                <p>{profile.company}</p>
                            </div>
                        </div>
                    </li>
                    
                </ul>
            </div>

            <div className="col">
                <ul className="list-group list-group-transparent list-group-flush list-group-borderless mb-0">
                    <li className="list-group-item pt-0">
                        <div className="media">
                            <span className="fas fa-globe list-group-icon mr-3"></span>
                            <div className="media-body text-lh-sm">
                                <span className="d-block mb-1">Website:</span>
                                <p>{profile.website}</p>
                            </div>
                        </div>
                    </li>
                    <li className="list-group-item pt-0">
                        <div className="media">
                            <span className="fas fa-user-tag list-group-icon mr-3"></span>
                            <div className="media-body text-lh-sm">
                                <span className="d-block mb-1">Status:</span>
                                <p>{profile.status}</p>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
            </div>

            <div className="row">
                <div className="card card-body p-3 bg-primary d-flex justify-content-center">
                    <div className="d-flex justify-content-between align-items-center">
                        <h4 className="h6 text-white mt-1"><i class="fas fa-marker mr-3"></i> Share something great you've done lately.</h4>
                        <Link to="/feed" className="btn btn-white btn-sm">Write a Post</Link>
                    </div>
                </div>
            </div>
        
    </div>
    </div>
    
    </React.Fragment>
  )
}


export default ProfileSnapshot;
