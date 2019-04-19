import React from 'react';

export default function Spinner() {
  return (
    <div class="min-vh-100 d-flex justify-content-center align-items-center" role="status">
        <div className="loader-container">
          <i class="fab fa-linkedin fa-4x"></i>
          <div class="loader"></div>
        </div>
    </div>
  )
}
