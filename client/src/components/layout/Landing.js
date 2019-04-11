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
        <section className="slice slice-lg bg-gradient-info">
          
          <div className="py-6 py-xl-9">
            <div className="container">
              <div className="row justify-content-between">
                <div className="col-lg-6">
                  <h1 className="text-white display-4 mt-4">The only open-source <strong>professional network.</strong></h1>
                  <p className="lead text-light mt-4">LinkedOut is a simplified version of LinkedIn where the source 
                  code is available to anyone.</p>
                  <Link to="/register" className="btn btn-white text-info hover-shadow-lg mb-4">Get Started</Link>
                </div>

                <div className="col-lg-6">
                  <img src={heroImg} alt="People working" className="img-fluid"/>
                </div>
              </div>
            </div>
          </div>
        </section>


        <section className="slice slice-lg">
          <div className="container">
            <div className="text-center">
              <h1>Build your professional network, or become a part of it.</h1>
              <div className="fluid-paragraph mt-4">
                <p className="lead text-muted lh-180">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa repudiandae ab aliquam tempore eius corrupti possimus asperiores ea quod laudantium!
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="slice slice-lg">
          <div className="container">
            <div className="row align-items-md-center">
              <div className="col-lg-3 col-6 mb-5 mb-lg-0">
                <div className="text-center mb-5 mb-lg-0">
                  <div className="icon icon-lg text-danger">
                    <i class="fas fa-link"></i>
                    <span className="d-block mt-4 h3 text-danger">
                      Connect
                    </span>
                    <span className="d-block mt-2 h6">To professionals</span>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-6 mb-5 mb-lg-0">
                <div className="text-center mb-5 mb-lg-0">
                  <div className="icon icon-lg text-info">
                  <i class="fas fa-network-wired"></i>
                    <span className="d-block mt-4 h3 text-info">
                      Build
                    </span>
                    <span className="d-block mt-2 h6">Your Network</span>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-6 mb-5 mb-lg-0">
                <div className="text-center mb-5 mb-lg-0">
                  <div className="icon icon-lg text-primary">
                    <i class="far fa-file"></i>
                    <span className="d-block mt-4 h3 text-primary">
                      Display
                    </span>
                    <span className="d-block mt-2 h6">Your experience</span>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-6 mb-5 mb-lg-0">
                <div className="text-center mb-5 mb-lg-0">
                  <div className="icon icon-lg text-success">
                    <i class="fas fa-user-md"></i>
                    <span className="d-block mt-4 h3 text-success">
                      Become
                    </span>
                    <span className="d-block mt-2 h6">Who you want</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>


        <section className="slice slice-lg bg-secondary">
          <div className="container">
            <div className="row row-grid align-items-center justify-content-around">
              <div className="col-lg-5 order-lg-2">
                <div className="pr-md-4">
                  <h5 className="h3">Contribute to the social internet.</h5>
                  <p className="text-muted lead my-4">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, accusantium? Amet sapiente reprehenderit exercitationem, accusantium ut tenetur suscipit voluptas quidem?
                  </p>
                  <Link to="/register" className="btn btn-info btn-icon mt-4 hover-shadow-lg">
                    <span className="btn-inner--icon"><i class="fas fa-user-plus"></i></span>
                    <span className="btn-inner--text">Sign Up</span>
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


        <section className="slice slice-lg">
          <div className="container">
            <div className="row row-grid align-items-center">
              <div className="col-lg-4">
                <div className="py-lg-5 text-lg-left">
                  <h3 className="mb-3">Another title here.</h3>
                  <p className="lead lh-180">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat nulla sint a saepe ipsum, explicabo hic labore veritatis repellendus perferendis.</p>
                  <Link to="/register" className="btn btn-info btn-icon rounded-pill mt-4">
                    <span className="btn-inner--text">Learn More</span>
                    <span className="btn-inner--icon"><i class="fas fa-angle-right"></i></span>
                  </Link>
                </div>
              </div>

              <div className="col-lg-7 ml-lg-auto">
                <div className="row">
                  <div className="col-md-6">
                    <div className="card hover-shadow-lg">
                      <div className="px-4 py-5 icon icon-lg">
                        <i class="fas fa-address-card"></i>
                      </div>
                      <div className="px-4 pb-5">
                        <h5>Title goes here</h5>
                        <p className="text-muted">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta maiores nobis architecto quibusdam? Minus, suscipit?</p>
                      </div>
                    </div>

                    <div className="card hover-shadow-lg">
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
                    <div className="card hover-shadow-lg">
                        <div className="px-4 py-5 icon icon-lg">
                          <i class="fas fa-address-card"></i>
                        </div>
                        <div className="px-4 pb-5">
                          <h5>Title goes here</h5>
                          <p className="text-muted">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta maiores nobis architecto quibusdam? Minus, suscipit?</p>
                        </div>
                      </div>

                      <div className="card hover-shadow-lg">
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


