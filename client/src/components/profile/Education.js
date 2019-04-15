import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import Moment from 'react-moment';

import { deleteEducation } from '../../actions/profileActions';

class Education extends Component {
  
    onDeleteClick(id) {
        this.props.deleteEducation(id);
    }
  
    render() {


    const edu = this.props.edu.map(item => (
        <tr key={item._id}>
            <td>{item.school}</td>
            <td>{item.degree}</td>
            <td>
                <Moment format="MM/DD/YYYY">{item.from}</Moment>
                {' '} - {' '}
                {item.to === null ? ('Current') : (<Moment format="MM/DD/YYYY">{item.to}</Moment>)}
            </td>
            <td><button className="btn btn-danger" onClick={this.onDeleteClick.bind(this, item._id)}>Remove</button></td>
        </tr>
    ))

    return (
      <div>
        <h4 className="mb-2">Experience</h4>
        <table className="table">
            <thead>
                <tr>
                    <th>School</th>
                    <th>Degree</th>
                    <th>Date</th>
                    <th></th>
                </tr>
                
                    {edu}
                
            </thead>
        </table>
      </div>
    )
  }
}


Education.propTypes = {
    deleteEducation: PropTypes.func.isRequired
};


export default connect(null, { deleteEducation })(Education);
