import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const ProfileInfoCard = ({
    title,
    link,
    iconClass,
    info,
    btnClass
}) => {

    return (
      <div className="card mb-3 mb-lg-0">
        <div className="card-body p-5">
            <div className="media align-items-center">
                <Link to={link} className={btnClass}>
                   <span className={iconClass}></span> 
                </Link>
                <div className="media-body">
                   <span className="d-block font-size-1 font-weight-bold">{title}</span>
                   <small className="text-muted font-weight-normal mb-0">{info}</small> 
                </div>
            </div>
        </div>
      </div>
    )
  }



export default ProfileInfoCard;
