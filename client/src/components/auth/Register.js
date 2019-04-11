import React, { Component } from 'react';
import { connect } from 'react-redux';
import { registerUser } from '../../actions/authActions';
import PropTypes from 'prop-types';
import { withRouter, Link } from 'react-router-dom';

import heroImg from '../../img/register/hero.png';


import classnames from 'classnames';

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
        <section className="min-vh-100 d-flex align-items-center bg-gradient-info">
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
                  <div className="card card-body">
                    <div className="mb-5 text-center">
                      <h6 className="h3">Create your account</h6>
                      <p className="text-muted mb-0">Start building your professional network in just a few steps.</p>
                    </div>
                    <span className="clearfix"></span>
                    <form onSubmit={this.onSubmit}>

                      <div className="form-group">
                        <input type="text" className={classnames('form-control form-control-lg', {
                          'is-invalid': errors.name
                        })} placeholder="Name" name="name" value={this.state.name} onChange={this.onChange}/>
                        {errors.name && (<div className="invalid-feedback">
                          {errors.name}
                        </div>)}
                      </div>

                      <div className="form-group">
                        <input type="email" className={classnames('form-control form-control-lg', {
                          'is-invalid': errors.email
                        })} placeholder="Email Address" value={this.state.email} name="email" onChange={this.onChange} />
                        {errors.email && (<div className="invalid-feedback">
                          {errors.email}
                        </div>)}
                      </div>

                      <div className="form-group">
                        <input type="password" className={classnames('form-control form-control-lg', {
                          'is-invalid': errors.password
                        })} placeholder="Password" name="password" value={this.state.password} onChange={this.onChange} />
                        {errors.password && (<div className="invalid-feedback">
                          {errors.password}
                        </div>)}
                      </div>

                      <div className="form-group">
                        <input type="password" className={classnames('form-control form-control-lg', {
                          'is-invalid': errors.password2
                        })} placeholder="Confirm Password" name="password2" value={this.state.password2} onChange={this.onChange} />
                        {errors.password2 && (<div className="invalid-feedback">
                          {errors.password2}
                        </div>)}
                      </div>
                      <input type="submit" className="btn btn-info btn-block mt-4" />

                    </form>
                    <div className="mt-4 text-center">
                      <small>Already have an account?</small>
                      <Link to="/login" className="text-info ml-2">Sign in.</Link>
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


{/* <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Sign Up</h1>
              <p className="lead text-center">Create your LinkedOut Account.</p>
              
            </div>
          </div>
        </div> */}