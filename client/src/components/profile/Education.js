import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import Moment from 'react-moment';

import { deleteEducation } from '../../actions/profileActions';

import ucbImg from '../../img/dashboard/ucb.png';

class Education extends Component {
  
    onDeleteClick(id) {
        this.props.deleteEducation(id);
    }
  
    render() {


    const edu = this.props.edu.map(item => (
        <div key={item._id}>
            <div className="row align-items-center">
                <div className="col-md-6">
                    <h4 className="h6 mb-0">{item.school}</h4>
                    <p className="mb-2">{item.degree}</p>
                    <p className="text-body">{item.description}</p>
                    <button className="btn btn-xs btn-outline-danger" type="button"
                    onClick={this.onDeleteClick.bind(this, item._id)}>Remove</button>
                </div>
                <div className="col-md-6 text-md-right">
                    <span className="d-inline-block bg-white rounded p-1">
                        <img src={ucbImg} alt="School Logo" className="img-fluid" style={{width: '100px', height: 'auto'}}/>
                    </span>
                </div>
            </div>
            <hr className="mb-2"/>
        </div>
    ))

    return (
      <React.Fragment>
          {edu}
      </React.Fragment>
    )
  }
}


Education.propTypes = {
    deleteEducation: PropTypes.func.isRequired
};


export default connect(null, { deleteEducation })(Education);
