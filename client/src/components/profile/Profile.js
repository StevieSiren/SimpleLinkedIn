import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { getCurrentProfile } from '../../actions/profileActions';

class Profile extends Component {
    
    componentDidMount() {
        this.props.getCurrentProfile();
    }

  render() {
    return (
      <div>
        <h1>Profile</h1>
      </div>
    )
  }
}





export default connect(null, { getCurrentProfile })(Profile);
