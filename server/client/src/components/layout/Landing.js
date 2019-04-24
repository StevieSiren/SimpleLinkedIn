import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';

import heroImg from '../../img/landing/hero.png';
import buildingImg from '../../img/landing/building.png';

class Landing extends Component {

  componentDidMount() {
    if(this.props.auth.isAuthenticated) {
      this.props.history.push('/profile');
    }
  }

  render() {
    return (
      <div className="main-container">
        <section className="space-3 bg-primary">
          
          <div className="py-6 py-xl-9">
            <div className="container">
              <div className="row justify-content-between">
                <div className="col-lg-6">
                  <small className="text-white">V 0.5</small>
                  <h1 className="text-white h1 mt-2">The only open-source <strong>professional network.</strong></h1>
                  <p className="lead text-light mt-4">LinkedOut is a simplified version of LinkedIn where the source 
                  code is available to anyone.</p>
                  <Link to="/register" className="mb-2 btn btn-white text-primary hover-shadow-lg transition-3d-hover mb-4">Get Started</Link>
                  <small className="text-white-70 d-block">Already have an account? <Link to="/login" className="text-warning">Sign In.</Link></small>
                </div>

                <div className="col-lg-6">
                  <img src={heroImg} alt="People working" className="img-fluid"/>
                </div>
              </div>
            </div>
          </div>
        </section>


        <section className="space-top-3">
          <div className="container">
            <div className="text-center col-md-8 mx-auto">
              <h1 className="h1 color-title">Build your professional network, <br /> <strong>or become a part of it.</strong></h1>
              <div className="fluid-paragraph mt-4">
                <p className="lead text-muted lh-180">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa repudiandae ab aliquam tempore eius corrupti possimus asperiores ea quod laudantium!
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="space-top-2 space-bottom-3">
          <div className="container">
            <div className="row align-items-md-center">
              <div className="col-lg-3 col-6 mb-5 mb-lg-0 transition-3d-hover">
                <div className="text-center mb-5 mb-lg-0">
                  <div className="icon icon-lg">
                  <span class="nav-icon-action bg-soft-primary">
                    <span class="fas fa-user-circle text-primary nav-icon-action-inner"></span>
                  </span>
                    <span className="d-block mt-4 h3 color-title">
                      Connect
                    </span>
                    <span className="d-block mt-2 h6">To professionals</span>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-6 mb-5 mb-lg-0 transition-3d-hover">
                <div className="text-center mb-5 mb-lg-0">
                  <div className="icon icon-lg">
                  <span class="nav-icon-action bg-soft-success">
                    <span class="fas fa-network-wired text-success nav-icon-action-inner"></span>
                  </span>
                    <span className="d-block mt-4 h3 color-title">
                      Build
                    </span>
                    <span className="d-block mt-2 h6">Your Network</span>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-6 mb-5 mb-lg-0 transition-3d-hover">
                <div className="text-center mb-5 mb-lg-0">
                  <div className="icon icon-lg">
                  <span class="nav-icon-action bg-soft-warning">
                    <span class="fas fa-briefcase text-warning nav-icon-action-inner"></span>
                  </span>
                    <span className="d-block mt-4 h3 color-title">
                      Display
                    </span>
                    <span className="d-block mt-2 h6">Your experience</span>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-6 mb-5 mb-lg-0 transition-3d-hover">
                <div className="text-center mb-5 mb-lg-0">
                  <div className="icon icon-lg">
                  <span class="nav-icon-action bg-soft-danger">
                    <span class="fas fa-user-graduate text-danger nav-icon-action-inner"></span>
                  </span>
                    <span className="d-block mt-4 h3 color-title">
                      Share
                    </span>
                    <span className="d-block mt-2 h6">Your education</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>


        <section className="space-3" style={{backgroundColor: '#f5f8f9'}}>
          <div className="container">
            <div className="row row-grid align-items-center justify-content-around">
              <div className="col-lg-5 order-lg-2">
                <div className="pr-md-4">
                  <h5 className="h3 color-title">Contribute to the <strong>social internet.</strong></h5>
                  <p className="text-muted lead my-4">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, accusantium? Amet sapiente reprehenderit exercitationem.
                  </p>
                  <Link to="/register" className="btn btn-primary mt-4">
                    Create an Account
                  </Link>
                </div>
              </div>

              <div className="col-lg-6 order-lg-1">
                <div className="position-relative">
                  <img src={buildingImg} alt="Building blocks" className="img-center img-fluid" style={{zIndex: '10'}}/>
                </div>
              </div>
            </div>
          </div>
        </section>


        <section className="space-3">
          <div className="container">
            <div className="row row-grid align-items-center">
              <div className="col-lg-4">
                <div className="py-lg-5 text-lg-left">
                  <h3 className="mb-3">Another title here.</h3>
                  <p className="lead lh-180">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat nulla sint a saepe ipsum, explicabo hic labore veritatis repellendus perferendis.</p>
                  <Link to="/register" className="btn btn-primary mt-4">
                    <span className="btn-inner--text">Learn More <i class="ml-1 fas fa-angle-right"></i></span>
                  </Link>
                </div>
              </div>

              <div className="col-lg-7 ml-lg-auto">
                <div className="row">
                  <div className="col-md-6">
                    <div className="card hover-shadow-lg mb-5 transition-3d-hover">
                      <div className="px-4 pt-5 pb-5 icon icon-lg">
                        <i class="fas fa-address-card"></i>
                      </div>
                      <div className="px-4 pb-5">
                        <h5>Title goes here</h5>
                        <p className="text-muted">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta maiores nobis architecto quibusdam? Minus, suscipit?</p>
                      </div>
                    </div>

                    <div className="card hover-shadow-lg transition-3d-hover">
                      <div className="px-4 py-5 icon icon-lg">
                        <i class="fas fa-address-card"></i>
                      </div>
                      <div className="px-4 pb-5">
                        <h5>Title goes here</h5>
                        <p className="text-muted">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta maiores nobis architecto quibusdam? Minus, suscipit?</p>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-6 pt-lg-6 pt-4">
                    <div className="card hover-shadow-lg mb-5 transition-3d-hover">
                        <div className="px-4 py-5 icon icon-lg">
                          <i class="fas fa-address-card"></i>
                        </div>
                        <div className="px-4 pb-5">
                          <h5>Title goes here</h5>
                          <p className="text-muted">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta maiores nobis architecto quibusdam? Minus, suscipit?</p>
                        </div>
                      </div>

                      <div className="card hover-shadow-lg transition-3d-hover">
                        <div className="px-4 py-5 icon icon-lg">
                          <i class="fas fa-address-card"></i>
                        </div>
                        <div className="px-4 pb-5">
                          <h5>Title goes here</h5>
                          <p className="text-muted">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta maiores nobis architecto quibusdam? Minus, suscipit?</p>
                        </div>
                      </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
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


