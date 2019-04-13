import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import TextFieldGroup from '../common/TextFieldGroup';
import TextAreaGroup from '../common/TextAreaGroup';
import InputGroup from '../common/InputGroup';
import SelectListGroup from '../common/SelectListGroup';




class CreateProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            displaySocialInputs: false,
            handle: '',
            company: '',
            website: '',
            location: '',
            status: '',
            skills: '',
            bio: '',
            twitter: '',
            facebook: '',
            youtube: '',
            errors: {}
        };

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(e) {
        e.preventDefault();
        console.log('Submitted form.');
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

  render() {

    const { errors, displaySocialInputs } = this.state;

    let socialInputs;
    if(displaySocialInputs) {
        socialInputs = (
            <div>
                <InputGroup 
                placeholder="Twitter"
                name="twitter"
                icon="fab fa-twitter"
                value={this.state.twitter}
                onChange={this.onChange}
                error={errors.twitter}
                />
                <InputGroup 
                placeholder="facebook"
                name="facebook"
                icon="fab fa-facebook"
                value={this.state.facebook}
                onChange={this.onChange}
                error={errors.facebook}
                />
                <InputGroup 
                placeholder="LinkedIn"
                name="linkedin"
                icon="fab fa-linkedin"
                value={this.state.linkedin}
                onChange={this.onChange}
                error={errors.linkedin}
                />
                <InputGroup 
                placeholder="YouTube"
                name="youtube"
                icon="fab fa-youtube"
                value={this.state.youtube}
                onChange={this.onChange}
                error={errors.youtube}
                />
            </div>
        )
    }

    const options = [
        { label: 'Select professional status', value: 0 },
        { label: 'Student', value: 'Student' },
        { label: 'Intern', value: 'Intern' },
        { label: 'Entry Level', value: 'Entry Level' },
        { label: 'Associate', value: 'Associate' },
        { label: 'Mid-level', value: 'Mid-level' },
        { label: 'Senior', value: 'Senior' }
    ];

    return (
        <div class="create-profile">
        <div class="container">
          <div class="row">
            <div class="col-md-8 m-auto">
              <a href="#" class="btn btn-light">
                Go Back
              </a>
              <h1 class="display-4 text-center">Create Your Profile</h1>
              <p class="lead text-center">Let's get some information to make your profile stand out</p>
              <small class="d-block pb-3">* = required field</small>
              <form action={this.onSubmit}>
                <TextFieldGroup 
                placeholder="Profile Handle"
                name="handle"
                value={this.state.handle}
                onChange={this.onChange}
                error={errors.handle}
                info="Unique handle for your profile URL."
                />

                <SelectListGroup 
                placeholder="Professional Status"
                name="status"
                value={this.state.status}
                onChange={this.onChange}
                options={options}
                error={errors.status}
                info="Select your professional status (experience level)."
                />

                <TextFieldGroup 
                placeholder="Company Name"
                name="company"
                value={this.state.company}
                onChange={this.onChange}
                error={errors.company}
                info="The current company you work for."
                />

                <TextFieldGroup 
                placeholder="Website"
                name="website"
                value={this.state.website}
                onChange={this.onChange}
                error={errors.website}
                info="URL for your personal or company website."
                />

                <TextFieldGroup 
                placeholder="Location"
                name="location"
                value={this.state.location}
                onChange={this.onChange}
                error={errors.location}
                info="Where you are currently located"
                />

                <TextFieldGroup 
                placeholder="Enter your skills"
                name="skills"
                value={this.state.skills}
                onChange={this.onChange}
                error={errors.skills}
                info="*separated by a , with no space (i.e. Marketing,Development,Excel)."
                />

                <TextAreaGroup 
                placeholder="Your bio"
                name="bio"
                value={this.state.bio}
                onChange={this.onChange}
                error={errors.bio}
                info="A short description of yourself"
                />

                <div className="mb-3">
                    <button className="btn btn-secondary" onClick={(e) => {
                        e.preventDefault();
                        this.setState(prevState => ({
                            displaySocialInputs: !prevState.displaySocialInputs
                        }));
                    }}>Add Social Links</button>
                    
                </div>
                {socialInputs}
                <input type="submit" value="Submit" className="btn btn-primary btn-block mt-4"/>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}


CreateProfile.propTypes = {
    profile: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
}


const mapStateToProps = state => ({
    profile: state.profile,
    errors: state.errors,
});


export default connect(mapStateToProps, {})(CreateProfile);
