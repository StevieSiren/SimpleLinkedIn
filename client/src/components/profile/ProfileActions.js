import React from 'react';
import { Link } from 'react-router-dom';

const ProfileActions = () => {
  return (
    <div className="d-flex" role="group">
            <Link to="/edit-profile" className="">
              <i className="fas fa-user-circle text-white mr-1"></i> Edit Profile</Link>
            <Link to="/add-experience" className="text-white mr-3">
              <i className="fab fa-black-tie text-white mr-1"></i>
              Add Experience</Link>
            <Link to="/add-education" className="">
              <i className="fas fa-graduation-cap text-white mr-1"></i>
              Add Education</Link>
          </div>
  )
}


export default ProfileActions;
