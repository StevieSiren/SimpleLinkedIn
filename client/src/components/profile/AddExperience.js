import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import TextFieldGroup from '../common/TextFieldGroup';
import TextAreaGroup from '../common/TextAreaGroup';
import Datepicker from '../common/inputs/Datepicker';

import { addExperience } from '../../actions/profileActions';

class AddExperience extends Component {
    constructor(props) {
        super(props);
        this.state = {
            company: '',
            title: '',
            location: '',
            from: '',
            to: '',
            current: false,
            description: '',
            errors: {},
            disabled: false
        };

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.onCheck = this.onCheck.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.errors) {
            this.setState({
                errors: nextProps.errors
            });
        }
    }

    onSubmit(e) {
        e.preventDefault();
        
        const expData = {
            company: this.state.company,
            title: this.state.title,
            location: this.state.location,
            from: this.state.from,
            to: this.state.to,
            current: this.state.current,
            description: this.state.description
        };

        this.props.addExperience(expData, this.props.history);
    }

    onChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    onCheck(e) {
        this.setState({
            current: !this.state.current,
            disabled: !this.state.disabled
        });
    }

  render() {

    const { errors } = this.state;

    return (
      <div className="min-vh-100 d-flex align-items-center">
        <div className="container">
            <div className="mb-3">
                <h2 className="h5 mb-0 text-primary">Add <strong>Experience</strong></h2>
                <p>Share a bit more about your work experience.</p>
            </div>
            
                <form onSubmit={this.onSubmit}>
                <div className="row">
                    <div className="col-sm-6 mb-6">
                        <TextFieldGroup 
                        placeholder="Company"
                        name="company"
                        type="text"
                        value={this.state.company}
                        onChange={this.onChange}
                        error={errors.company}
                        />

                        
                    </div>
                    <div className="col-sm-6 mb-6">
                        <TextFieldGroup 
                        placeholder="Job Title"
                        name="title"
                        value={this.state.title}
                        onChange={this.onChange}
                        error={errors.title}
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-12 mb-6">
                        <TextFieldGroup 
                        placeholder="Location"
                        name="location"
                        value={this.state.location}
                        onChange={this.onChange}
                        error={errors.location}
                        />
                    </div>
                    
                </div>
                <div className="row">
                <div className="col-sm-6 mb-6">
                        <TextFieldGroup 
                        placeholder="Start Date"
                        name="from"
                        type="date"
                        value={this.state.from}
                        onChange={this.onChange}
                        error={errors.from}
                        />
                    </div>
                    <div className="col-sm-6 mb-">
                    
                        <TextFieldGroup 
                        name="to"
                        type="date"
                        value={this.state.to}
                        onChange={this.onChange}
                        error={errors.to}
                        disabled={this.state.disabled ? 'disabled' : ''}
                        info={this.state.disabled ? 'You currently work here' : null}
                        />
                        <div className="form-check mb-4">
                            <input type="checkbox"
                            className="form-check-input"
                            name="current"
                            value={this.state.current}
                            checked={this.state.current}
                            onChange={this.onCheck}
                            id="current"
                            />
                            <label htmlFor="current" className="form-check-label">I currently work here</label>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-12 mb-6">
                    <TextFieldGroup 
                        name="description"
                        value={this.state.description}
                        onChange={this.onChange}
                        error={errors.description}
                        info="Write a short description about your duties."
                        />
                    </div>
                </div>
                <input type="submit" value="Save Experience" className="btn btn-primary transition-3d-hover"/>
                <Link to="/profile" className="btn btn-soft-secondary transition-3d-hover ml-3">Back to Profile</Link>
                </form>
                
                </div>
            </div>
        
      
    )
  }
}


AddExperience.propTypes = {
    profile: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired,
    addExperience: PropTypes.func.isRequired
};


const mapStateToProps = state => ({
    profile: state.profile,
    errors: state.errors
});



export default connect(mapStateToProps, { addExperience })(withRouter(AddExperience));
