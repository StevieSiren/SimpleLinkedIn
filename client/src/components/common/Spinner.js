import React from 'react';

export default function Spinner() {
  return (
    <div className="min-vh-100 d-flex justify-content-center align-items-center" role="status">
        <div className="loader-container">
          <i className="fab fa-linkedin fa-4x"></i>
          <div className="loader"></div>
        </div>
    </div>
  )
}
