import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { loginUser } from '../../actions/authActions';
import TextFieldGroup from '../common/TextFieldGroup';

import loginImg from '../../img/register/hero.png';

class Login extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            email: '',
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
      if(nextProps.auth.isAuthenticated) {
        this.props.history.push('/profile');
      }

      if(nextProps.errors) {
        this.setState({ errors: nextProps.errors });
      }
    }

    onChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();

        const userData = {
            email: this.state.email,
            password: this.state.password
        };

        this.props.loginUser(userData);
    }

  render() {
    const { errors } = this.state;

    return (
        <section className="login min-vh-100 d-flex align-items-center">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-10 m-auto p-8 border shadow" style={{borderRadius: '8px'}}>
              <div className="row">
              <div className="col-12 col-md-6 border-right">
                <form onSubmit={this.onSubmit}>
                <h4 className="mb-4 text-dark">Login to your account</h4>
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
                  <input type="submit" value="Login" className="btn btn-soft-primary btn-block mt-4" />
                </form>
              </div>

              <div className="col-6 d-none d-md-flex flex-column justify-content-center">
                <h4 className="text-dark">Luck is only made, not given.</h4>
                <p className="lead text-muted">What are you waiting for? Start connecting with other professionals today.</p>
                <Link to="/" className="text-primary">Learn More</Link>
                {/* <img src={loginImg} alt="" className="img-fluid" /> */}
              </div>
              </div>
              


              
            </div>
          </div>
        </div>
      </section>
    )
  }
}


Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
}


const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors
});


export default connect(mapStateToProps, { loginUser })(Login);
