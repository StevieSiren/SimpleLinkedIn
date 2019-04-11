import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';

class Landing extends Component {

  componentDidMount() {
    if(this.props.auth.isAuthenticated) {
      this.props.history.push('/profile');
    }
  }

  render() {
    return (
      <div>
        Landing page
      </div>
    )
  }
}


Landing.propTypes = {
  auth: PropTypes.object.isRequired
};


const mapStateToProps = (state) => ({
  auth: state.auth
});




export default connect(mapStateToProps)(Landing);


