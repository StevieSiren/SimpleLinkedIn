import React, { Component } from 'react';
import { connect } from 'react-redux';
import { registerUser } from '../../actions/authActions';
import PropTypes from 'prop-types';
import { withRouter, Link } from 'react-router-dom';

import heroImg from '../../img/register/hero.png';
import TextFieldGroup from '../common/TextFieldGroup';

class Register extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            email: '',
            password: '',
            password2: '',
            errors: {}
        };

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    componentDidMount() {
      if(this.props.auth.isAuthenticated) {
        this.props.history.push('/profile');
      }
    }

    componentWillReceiveProps(nextProps) {
      if(nextProps.errors) {
        this.setState({errors: nextProps.errors})
      }
    }

    onChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();

        const newUser = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
            password2: this.state.password2
        };

        

        this.props.registerUser(newUser, this.props.history);
    }

  render() {
    const { errors } = this.state;

    return (
      <div className="main-content">
        <section className="min-vh-100 d-flex align-items-center bg-primary">
        {/* <div className="bg-img-holder top-0 right-0 col-lg-6 col-xl-8 zindex-100 d-none d-lg-block"
        data-bg-size="cover"
        data-bg-position="center"
        style={{backgroundPosition: 'center center', backgroundSize: 'cover', opacity: '1', height: '100%', backgroundImage: "url('../../img/register/hero.png')"}}>
          <img src={heroImg} alt=""/>
        </div> */}
          <div className="container py-5">
            <div className="row align-items-center">
              <div className="col-sm-7 col-md-6 mx-auto ml-lg-0">
                <div className="px-lg-2">
                  <div className="card card-body shadow">
                    <div className="mb-5 text-center">
                      <h6 className="h3">Create your account</h6>
                      <p className="text-muted mb-0">Start building your professional network in just a few steps.</p>
                    </div>
                    <span className="clearfix"></span>
                    <form onSubmit={this.onSubmit}>

                    <TextFieldGroup 
                    placeholder="Full Name"
                    name="name"
                    type="text"
                    value={this.state.name}
                    onChange={this.onChange}
                    error={errors.name}
                    />

                    <TextFieldGroup 
                    placeholder="Email Address"
                    name="email"
                    type="email"
                    value={this.state.email}
                    onChange={this.onChange}
                    error={errors.email}
                    />

                    <TextFieldGroup 
                    placeholder="Password"
                    name="password"
                    type="password"
                    value={this.state.password}
                    onChange={this.onChange}
                    error={errors.password}
                    />

                    <TextFieldGroup 
                    placeholder="Re-enter your password"
                    name="password2"
                    type="password2"
                    value={this.state.password2}
                    onChange={this.onChange}
                    error={errors.password2}
                    />

                    
                      <input type="submit" className="btn btn-soft-primary btn-block mt-4" />

                    </form>
                    <div className="mt-4 text-center">
                      <small>Already have an account?</small>
                      <Link to="/login" className="text-primary ml-2">Sign in.</Link>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-6">
                <img src={heroImg} alt="" className="img-fluid"/>
              </div>
            </div>
          </div>
        </section>  
      </div>
    )
  }
}

Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};


const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});


export default connect(mapStateToProps, { registerUser })(withRouter(Register));