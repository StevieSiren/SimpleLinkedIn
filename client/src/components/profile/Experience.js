import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import Moment from 'react-moment';

import { deleteExperience } from '../../actions/profileActions';

class Experience extends Component {
  
    onDeleteClick(id) {
        this.props.deleteExperience(id, this.props.history);
    }
  
    render() {


    const exp = this.props.exp.map(item => (
        <tr key={item._id}>
            <td>{item.company}</td>
            <td>{item.title}</td>
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
                    <th>Company</th>
                    <th>Title</th>
                    <th>Date</th>
                    <th></th>
                </tr>
                
                    {exp}
                
            </thead>
        </table>
      </div>
    )
  }
}


Experience.propTypes = {
    deleteExperience: PropTypes.func.isRequired
};


export default connect(null, { deleteExperience })(Experience);
