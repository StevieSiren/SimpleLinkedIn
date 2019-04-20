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
        // <tr key={item._id}>
        //     <td>{item.company}</td>
        //     <td>{item.title}</td>
        //     <td>
        //         <Moment format="MM/DD/YYYY">{item.from}</Moment>
        //         {' '} - {' '}
        //         {item.to === null ? ('Current') : (<Moment format="MM/DD/YYYY">{item.to}</Moment>)}
        //     </td>
        //     <td><button className="btn btn-danger" onClick={this.onDeleteClick.bind(this, item._id)}>Remove</button></td>
        // </tr>
        <div className="col-lg-12 mb-3 shadow" key={item._id}>
            <div className="card">
                <div className="card-body p-5">
                <div className="float-right">
                <button type="button" onClick={this.onDeleteClick.bind(this, item._id)} class="btn btn-icon btn-outline-danger btn-xs">
                    <span class="fas fa-times btn-icon__inner"></span>
                </button>
                </div>
                <h2 className="h6 font-weight-medium" style={{color: '#444'}}>{item.title}</h2>
                <p className="text-secondary"><em className="mr-3">{item.company}</em>{' '}<i class="far fa-clock"></i> {' '}<small className="text-muted d-inline">
                    <Moment format="MM/DD/YYYY">{item.from}</Moment>
                    {' '} - {' '}
                    {item.to === null ? ('Current') : (<Moment format="MM/DD/YYYY">{item.to}</Moment>)}
                </small></p>
                    
                    <p>{item.description}</p>
                </div>
            </div> 
        </div>
    ))

    return (
      <React.Fragment>
          {exp}
      </React.Fragment>
    )
  }
}


Experience.propTypes = {
    deleteExperience: PropTypes.func.isRequired
};


export default connect(null, { deleteExperience })(Experience);
