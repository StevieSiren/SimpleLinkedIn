import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { getCurrentProfile, deleteAccount } from '../../actions/profileActions';
import Spinner from '../common/Spinner';
import Experience from './Experience';
import Education from './Education';
import ProfileInfoCard from './ProfileInfoCard';
import ProfileSnapshot from './ProfileSnapshot';

import noProfileImg from '../../img/dashboard/noprofile.png';

class Profile extends Component {
    
    componentDidMount() {
        this.props.getCurrentProfile();
    }

    onDeleteClick(e) {
      e.preventDefault();
      this.props.deleteAccount();
    }

  render() {
    const { user } = this.props.auth;
    const { profile, loading } = this.props.profile;

    let profileContent;

    if(profile === null || loading) {
      profileContent = <Spinner />
    } else {
      if(Object.keys(profile).length > 0) {
        profileContent = (
          // <div className="mt-7">
          //   <h4><Link to={`/profile/${profile.handle}`}>{user.name}</Link></h4>
          //   <ProfileActions />
          //   <Experience exp={profile.experience}/>
          //   <Education edu={profile.education}/>
          //   <div className="mt-4">
          //     <button onClick={this.onDeleteClick.bind(this)} className="btn btn-danger">
          //       Delete Account
          //     </button>
          //   </div>
          // </div>
          <div>
            <div className="bg-primary">
            <div className="container py-5">
              <div className="row">
                <div className="col-lg-7 order-lg-1">
                  <div className="media d-block d-sm-flex align-items-sm-center">
                    <div className="u-lg-avatar position-relative mb-3 mb-sm-0 mr-3">
                      <img src={user.avatar} alt="" className="img-fluid rounded-circle"/>
                    </div>
                    <div className="media-body">
                      <h1 className="h3 text-white font-weight-normal mb-1">Welcome, <span className="font-weight-medium">{user.name}</span></h1>
                      <span className="d-block text-light"><i class="fas fa-envelope-open-text mr-2 text-white-50"></i> {profile.user.email}</span>
                      
                    </div>
                  </div>
                  
                </div>
              </div>
            </div>
            </div>
            <section className="py-3 mt-4">
              <div className="container">
                <div className="card-deck d-block d-lg-flex card-lg-gutters-3 mb-6">
                  <ProfileInfoCard 
                  title="Where do you work?" 
                  btnClass="btn btn-lg btn-icon btn-soft-primary rounded-circle mr-4"
                  link="/add-experience" 
                  info="Share details about your previous and/or current experience." 
                  iconClass="fas fa-briefcase btn-icon__inner"
                  />
                  <ProfileInfoCard 
                  title="Have a degree?" 
                  btnClass="btn btn-lg btn-icon btn-soft-success rounded-circle mr-4"
                  link="/add-education" 
                  info="Provide your educational background" 
                  iconClass="fas fa-graduation-cap btn-icon__inner"
                  />
                  <ProfileInfoCard 
                  title="Edit your profile" 
                  btnClass="btn btn-lg btn-icon btn-soft-warning rounded-circle mr-4"
                  link="/edit-profile" 
                  info="Edit your current profile settings." 
                  iconClass="fas fa-cogs btn-icon__inner"
                  />
                </div>
              </div>
            </section>

            <div class="text-center">
              <span class="u-divider u-divider--text">Your profile snapshot</span>
            </div>

            <section className="mt-2 py-3">
              <div className="container">
                
                <ProfileSnapshot profile={profile} />
              </div>
            </section>

            <section className="space-lg-1" style={{backgroundColor: '#f5f8f9'}}>
              <div className="container">
                <h2 className="text-primary mb-3 h5">Your <strong>Experience</strong></h2>
                {profile.experience.length === 0 ? (<Link to="/add-experience" className="btn btn-outline-primary">Add Experience</Link>) : (<Experience exp={profile.experience}/>)}
              </div>
            </section>

            <section className="space-lg-1">
              <div className="container">
                <h2 className="text-primary mb-3 h5">Your <strong>Education</strong></h2>
                {profile.education.length === 0 ? (<Link to="/add-education" className="btn btn-outline-primary">Add Education</Link>) : (<Education edu={profile.education}/>)}
              </div>
            </section>
          </div>
        );
      } else {
        // Show CTA to create a profile
        profileContent = (
          <div className="min-vh-100">
            <div className="container" style={{marginTop: '200px'}}>
              <div className="d-flex flex-column align-items-center">
              <img src={noProfileImg} alt="" className="img-fluid"/>
                <h3 className="h3" style={{color: '#444'}}>Welcome, {user.name}!</h3>
                <p>It looks like you haven't created a profile yet. Fortunately, it's very easy.</p>
                <Link to="/create-profile" className="btn btn-primary">
                  Create Profile
                </Link>
              </div>
            </div>
          </div>
        )
      }
    }

    return (
      <div className="profile">
        
          
            
              {profileContent}
           
        
      </div>
    )
  }
}


Profile.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  deleteAccount: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired
}


const mapStateToProps = state => ({
  profile: state.profile,
  auth: state.auth
});


export default connect(mapStateToProps, { getCurrentProfile, deleteAccount })(Profile);
