import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { logoutUser } from "../../actions/authActions";
import { clearCurrentProfile } from '../../actions/profileActions';

import jQuery from 'jquery';
// import '../../assets/js/megamenu/hs.megamenu';
// import '../../assets/js/hs.core';
// import '../../assets/js/components/hs.header';

class Navbar extends Component {

  onLogoutClick(e) {
    e.preventDefault();
    this.props.clearCurrentProfile();
    this.props.logoutUser();
  }


  render() {
    const { isAuthenticated, user } = this.props.auth;

    const authLinks = (
      <ul className="navbar-nav ml-auto">
      
        <li className="nav-item">
          <Link className="nav-link" to="/profile">
            Profile
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/profiles">
            All Profiles
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/feed">
            Feed
          </Link>
        </li>
          <li className="nav-item">
            <Link onClick={this.onLogoutClick.bind(this)} className="nav-link">
            
            Logout</Link>
          </li>
      </ul>


  //     <header id="header" className="u-header u-header--abs-top-md u-header--bg-transparent u-header--show-hide-md"
  //         data-header-fix-moment="500"
  //         data-header-fix-effect="slide">
    
  //   <div id="searchPushTop" className="u-search-push-top">
  //     <div className="container position-relative">
  //       <div className="u-search-push-top__content">
          
  //         <button type="button" className="close u-search-push-top__close-btn"
  //                 aria-haspopup="true"
  //                 aria-expanded="false"
  //                 aria-controls="searchPushTop"
  //                 data-unfold-type="jquery-slide"
  //                 data-unfold-target="#searchPushTop">
  //           <span aria-hidden="true">&times;</span>
  //         </button>
          
  //         <form className="js-focus-state input-group input-group-lg">
  //           <input type="search" className="form-control" placeholder="Search Front" aria-label="Search Front" />
  //           <div className="input-group-append">
  //             <button type="button" className="btn btn-primary">Search</button>
  //           </div>
  //         </form>
          
  //         <div className="row d-none d-md-flex mt-7">
  //           <div className="col-sm-6">
  //             <strong className="d-block mb-2">Quick Links</strong>

  //             <div className="row">
               
  //               <div className="col-6">
  //                 <div className="list-group list-group-transparent list-group-flush list-group-borderless">
  //                   <a className="list-group-item list-group-item-action" href="#">
  //                     <span className="fas fa-angle-right list-group-icon"></span>
  //                     Search Results List
  //                   </a>
  //                   <a className="list-group-item list-group-item-action" href="#">
  //                     <span className="fas fa-angle-right list-group-icon"></span>
  //                     Search Results Grid
  //                   </a>
  //                   <a className="list-group-item list-group-item-action" href="#">
  //                     <span className="fas fa-angle-right list-group-icon"></span>
  //                     About
  //                   </a>
  //                   <a className="list-group-item list-group-item-action" href="#">
  //                     <span className="fas fa-angle-right list-group-icon"></span>
  //                     Services
  //                   </a>
  //                   <a className="list-group-item list-group-item-action" href="#">
  //                     <span className="fas fa-angle-right list-group-icon"></span>
  //                     Invoice
  //                   </a>
  //                 </div>
  //               </div>
                

                
  //               <div className="col-6">
  //                 <div className="list-group list-group-transparent list-group-flush list-group-borderless">
  //                   <a className="list-group-item list-group-item-action" href="#">
  //                     <span className="fas fa-angle-right list-group-icon"></span>
  //                     Profile
  //                   </a>
  //                   <a className="list-group-item list-group-item-action" href="#">
  //                     <span className="fas fa-angle-right list-group-icon"></span>
  //                     User Contacts
  //                   </a>
  //                   <a className="list-group-item list-group-item-action" href="#">
  //                     <span className="fas fa-angle-right list-group-icon"></span>
  //                     Reviews
  //                   </a>
  //                   <a className="list-group-item list-group-item-action" href="#">
  //                     <span className="fas fa-angle-right list-group-icon"></span>
  //                     Settings
  //                   </a>
  //                 </div>
  //               </div>
                
  //             </div>
  //           </div>

  //           <div className="col-sm-6">
            
  //             <div className="rounded u-search-push-top__banner">
  //               <div className="d-flex align-items-center">
  //                 <div className="u-search-push-top__banner-container">
  //                   <img className="img-fluid u-search-push-top__banner-img" src="../../assets/img/mockups/img3.png" alt="Image Description" />
  //                   <img className="img-fluid u-search-push-top__banner-img" src="../../assets/img/mockups/img2.png" alt="Image Description" />
               

  //                 <div>
  //                   <div className="mb-4">
  //                     <strong className="d-block mb-2">Featured Item</strong>
  //                     <p>Create astonishing web sites and pages.</p>
  //                   </div>
  //                   <a className="btn btn-xs btn-soft-success transition-3d-hover" href="index.html">Apply Now <span className="fas fa-angle-right ml-2"></span></a>
  //                 </div>
  //               </div>
  //             </div>
              
  //           </div>
  //         </div>
          
  //       </div>
  //     </div>
  //   </div>
   

  //   <div className="u-header__section">
      
  //     <div className="container u-header__hide-content pt-2">
  //       <div className="d-flex align-items-center">
         
  //         <div className="position-relative">
  //           <Link id="languageDropdownInvoker" className="dropdown-nav-link dropdown-toggle d-flex align-items-center" href="javascript:;" role="button"
  //              aria-controls="languageDropdown"
  //              aria-haspopup="true"
  //              aria-expanded="false"
  //              data-unfold-event="hover"
  //              data-unfold-target="#languageDropdown"
  //              data-unfold-type="css-animation"
  //              data-unfold-duration="300"
  //              data-unfold-delay="300"
  //              data-unfold-hide-on-scroll="true"
  //              data-unfold-animation-in="slideInUp"
  //              data-unfold-animation-out="fadeOut">
  //              <img className="dropdown-item-icon" src="../../assets/vendor/flag-icon-css/flags/4x3/us.svg" alt="SVG" />
  //             <span className="d-inline-block d-sm-none">US</span>
  //             <span className="d-none d-sm-inline-block">United States</span>
  //           </Link>

  //           <div id="languageDropdown" className="dropdown-menu dropdown-unfold" aria-labelledby="languageDropdownInvoker">
  //             <a className="dropdown-item active" href="#">English</a>
  //             <a className="dropdown-item" href="#">Deutsch</a>
  //             <a className="dropdown-item" href="#">Español‎</a>
  //           </div>
  //         </div>
        

  //         <div className="ml-auto">
           
  //           <div className="d-inline-block d-sm-none position-relative mr-2">
  //             <a id="jumpToDropdownInvoker" className="dropdown-nav-link dropdown-toggle d-flex align-items-center" href="javascript:;" role="button"
  //                aria-controls="jumpToDropdown"
  //                aria-haspopup="true"
  //                aria-expanded="false"
  //                data-unfold-event="hover"
  //                data-unfold-target="#jumpToDropdown"
  //                data-unfold-type="css-animation"
  //                data-unfold-duration="300"
  //                data-unfold-delay="300"
  //                data-unfold-hide-on-scroll="true"
  //                data-unfold-animation-in="slideInUp"
  //                data-unfold-animation-out="fadeOut">
  //               Jump to
  //             </a>

  //             <div id="jumpToDropdown" className="dropdown-menu dropdown-unfold" aria-labelledby="jumpToDropdownInvoker">
  //               <a className="dropdown-item" href="../../html/pages/help.html">Help</a>
  //               <a className="dropdown-item" href="../../html/pages/contacts-agency.html">Contacts</a>
  //             </div>
  //           </div>
            

            
  //           <div className="d-none d-sm-inline-block ml-sm-auto">
  //             <ul className="list-inline mb-0">
  //               <li className="list-inline-item mr-0">
  //                 <a className="u-header__navbar-link" href="../pages/help.html">Help</a>
  //               </li>
  //               <li className="list-inline-item mr-0">
  //                 <a className="u-header__navbar-link" href="../pages/contacts-agency.html">Contacts</a>
  //               </li>
  //             </ul>
  //           </div>
         
  //         </div>

  //         <ul className="list-inline ml-2 mb-0">
          
  //           <li className="list-inline-item">
  //             <a className="btn btn-xs btn-icon btn-text-secondary" href="javascript:;" role="button"
  //                     aria-haspopup="true"
  //                     aria-expanded="false"
  //                     aria-controls="searchPushTop"
  //                     data-unfold-type="jquery-slide"
  //                     data-unfold-target="#searchPushTop">
  //               <span className="fas fa-search btn-icon__inner"></span>
  //             </a>
  //           </li>
           
  //           <li className="list-inline-item position-relative">
  //             <a id="shoppingCartDropdownInvoker" className="btn btn-xs btn-icon btn-text-secondary" href="javascript:;" role="button"
  //                     aria-controls="shoppingCartDropdown"
  //                     aria-haspopup="true"
  //                     aria-expanded="false"
  //                     data-unfold-event="hover"
  //                     data-unfold-target="#shoppingCartDropdown"
  //                     data-unfold-type="css-animation"
  //                     data-unfold-duration="300"
  //                     data-unfold-delay="300"
  //                     data-unfold-hide-on-scroll="true"
  //                     data-unfold-animation-in="slideInUp"
  //                     data-unfold-animation-out="fadeOut">
  //               <span className="fas fa-shopping-cart btn-icon__inner"></span>
  //             </a>

  //             <div id="shoppingCartDropdown" className="dropdown-menu dropdown-unfold dropdown-menu-right text-center p-7" aria-labelledby="shoppingCartDropdownInvoker" style={{minWidth: '250px'}}>
  //               <span className="btn btn-icon btn-soft-primary rounded-circle mb-3">
  //                 <span className="fas fa-shopping-basket btn-icon__inner"></span>
  //               </span>
  //               <span className="d-block">Your Cart is Empty</span>
  //             </div>
  //           </li>
           
  //           <li className="list-inline-item">
             
  //             <a id="sidebarNavToggler" className="btn btn-xs btn-icon btn-text-secondary" href="javascript:;" role="button"
  //                aria-controls="sidebarContent"
  //                aria-haspopup="true"
  //                aria-expanded="false"
  //                data-unfold-event="click"
  //                data-unfold-hide-on-scroll="false"
  //                data-unfold-target="#sidebarContent"
  //                data-unfold-type="css-animation"
  //                data-unfold-animation-in="fadeInRight"
  //                data-unfold-animation-out="fadeOutRight"
  //                data-unfold-duration="500">
  //               <span className="fas fa-user-circle btn-icon__inner font-size-1"></span>
  //             </a>
            
  //           </li>
           
  //         </ul>
  //       </div>
  //     </div>
   

  //     <div id="logoAndNav" className="container">
       
  //       <nav classNameName="js-mega-menu navbar navbar-expand-md u-header__navbar u-header__navbar--no-space">
        
  //         <Link className="navbar-brand u-header__navbar-brand u-header__navbar-brand-center" href="index.html" aria-label="Front">
            
  //           <span className="u-header__navbar-brand-text">Front</span>
  //         </Link>
         

         
  //         <button type="button" className="navbar-toggler btn u-hamburger"
  //                 aria-label="Toggle navigation"
  //                 aria-expanded="false"
  //                 aria-controls="navBar"
  //                 data-toggle="collapse"
  //                 data-target="#navBar">
  //           <span id="hamburgerTrigger" className="u-hamburger__box">
  //             <span className="u-hamburger__inner"></span>
  //           </span>
  //         </button>
         
  //         <div id="navBar" className="collapse navbar-collapse u-header__navbar-collapse">
  //           <ul className="navbar-nav u-header__navbar-nav">
            
  //             <li className="nav-item hs-has-mega-menu u-header__nav-item"
  //                 data-event="hover"
  //                 data-animation-in="slideInUp"
  //                 data-animation-out="fadeOut"
  //                 data-position="left">
  //               <a id="homeMegaMenu" className="nav-link u-header__nav-link u-header__nav-link-toggle" href="javascript:;" aria-haspopup="true" aria-expanded="false">Home</a>

            
  //               <div className="hs-mega-menu w-100 u-header__sub-menu" aria-labelledby="homeMegaMenu">
  //                 <div className="row no-gutters">
  //                   <div className="col-lg-6">
                     
  //                     <div className="u-header__banner">
  //                       <div className="u-header__banner-content">
  //                         <div className="mb-4">
  //                           <span className="u-header__banner-title">Branding Works</span>
  //                           <p className="u-header__banner-text">Experience a level of our quality in both design &amp; customization works.</p>
  //                         </div>
  //                         <a className="btn btn-primary btn-sm transition-3d-hover" href="#">Learn More <span className="fas fa-angle-right ml-2"></span></a>
  //                       </div>
  //                     </div>
                  
  //                   </div>

  //                   <div className="col-lg-6">
  //                     <div className="row u-header__mega-menu-wrapper">
  //                       <div className="col-sm-6 mb-3 mb-sm-0">
  //                         <span className="u-header__sub-menu-title">Classic</span>
  //                         <ul className="u-header__sub-menu-nav-group mb-3">
  //                           <li><a className="nav-link u-header__sub-menu-nav-link" href="index.html">Classic Agency</a></li>
  //                           <li><a className="nav-link u-header__sub-menu-nav-link" href="classNameic-business.html">Classic Business</a></li>
  //                           <li><a className="nav-link u-header__sub-menu-nav-link" href="classNameic-marketing.html">Classic Marketing</a></li>
  //                           <li><a className="nav-link u-header__sub-menu-nav-link" href="classNameic-consulting.html">Classic Consulting</a></li>
  //                           <li><a className="nav-link u-header__sub-menu-nav-link" href="classNameic-start-up.html">Classic Start-up</a></li>
  //                         </ul>

  //                         <span className="u-header__sub-menu-title">Corporate</span>
  //                         <ul className="u-header__sub-menu-nav-group mb-3">
  //                           <li><a className="nav-link u-header__sub-menu-nav-link" href="corporate-agency.html">Corporate Agency</a></li>
  //                           <li><a className="nav-link u-header__sub-menu-nav-link" href="corporate-start-up.html">Corporate Start-Up</a></li>
  //                           <li><a className="nav-link u-header__sub-menu-nav-link" href="corporate-business.html">Corporate Business</a></li>
  //                         </ul>

  //                         <span className="u-header__sub-menu-title">Portfolio</span>
  //                         <ul className="u-header__sub-menu-nav-group">
  //                           <li><a className="nav-link u-header__sub-menu-nav-link" href="portfolio-agency.html">Portfolio Agency</a></li>
  //                           <li><a className="nav-link u-header__sub-menu-nav-link" href="portfolio-profile.html">Portfolio Profile</a></li>
  //                         </ul>
  //                       </div>

  //                       <div className="col-sm-6">
  //                         <span className="u-header__sub-menu-title">Onepages</span>
  //                         <ul className="u-header__sub-menu-nav-group mb-3">
  //                           <li><a className="nav-link u-header__sub-menu-nav-link" href="onepage-creative.html">Onepage Creative</a></li>
  //                           <li><a className="nav-link u-header__sub-menu-nav-link" href="onepage-saas.html">Onepage SaaS</a></li>
  //                         </ul>

  //                         <span className="u-header__sub-menu-title">Blog</span>
  //                         <ul className="u-header__sub-menu-nav-group mb-3">
  //                           <li><a className="nav-link u-header__sub-menu-nav-link" href="blog-agency.html">Blog Agency</a></li>
  //                           <li><a className="nav-link u-header__sub-menu-nav-link" href="blog-start-up.html">Blog Start-Up</a></li>
  //                           <li><a className="nav-link u-header__sub-menu-nav-link" href="blog-business.html">Blog Business</a></li>
  //                         </ul>

  //                         <span className="u-header__sub-menu-title">App</span>
  //                         <ul className="u-header__sub-menu-nav-group">
  //                           <li><a className="nav-link u-header__sub-menu-nav-link" href="app-payment.html">App Payment <span className="badge badge-success badge-pill ml-1">New</span></a></li>
  //                           <li><a className="nav-link u-header__sub-menu-nav-link" href="app-software.html">App Software <span className="badge badge-success badge-pill ml-1">New</span></a></li>
  //                         </ul>
  //                       </div>
  //                     </div>
  //                   </div>
  //                 </div>
  //               </div>
               
  //             </li>
             

         
  //             <li className="nav-item hs-has-sub-menu u-header__nav-item"
  //                 data-event="hover"
  //                 data-animation-in="slideInUp"
  //                 data-animation-out="fadeOut">
  //               <a id="pagesMegaMenu" className="nav-link u-header__nav-link u-header__nav-link-toggle" href="javascript:;" aria-haspopup="true" aria-expanded="false" aria-labelledby="pagesSubMenu">Pages</a>

              
  //               <ul id="pagesSubMenu" className="hs-sub-menu u-header__sub-menu" aria-labelledby="pagesMegaMenu" style={{minWidth: '230px'}}>
            
  //                 <li className="hs-has-sub-menu">
  //                   <a id="navLinkPagesAccount" className="nav-link u-header__sub-menu-nav-link u-header__sub-menu-nav-link-toggle" href="javascript:;" aria-haspopup="true" aria-expanded="false" aria-controls="navSubmenuPagesAccount">Account</a>

  //                   <ul id="navSubmenuPagesAccount" className="hs-sub-menu u-header__sub-menu" aria-labelledby="navLinkPagesAccount" style={{minWidth: '230px'}}>
  //                     <li><a className="nav-link u-header__sub-menu-nav-link" href="../account/dashboard.html">Dashboard</a></li>
  //                     <li><a className="nav-link u-header__sub-menu-nav-link" href="../account/profile.html">Profile</a></li>
  //                     <li><a className="nav-link u-header__sub-menu-nav-link" href="../account/my-tasks.html">My tasks</a></li>
  //                     <li><a className="nav-link u-header__sub-menu-nav-link" href="../account/projects.html">Projects</a></li>
  //                     <li><a className="nav-link u-header__sub-menu-nav-link" href="../account/members.html">Members</a></li>
  //                     <li><a className="nav-link u-header__sub-menu-nav-link" href="../account/edit-profile.html">Edit profile</a></li>
  //                     <li><a className="nav-link u-header__sub-menu-nav-link" href="../account/change-password.html">Change password</a></li>
  //                     <li><a className="nav-link u-header__sub-menu-nav-link" href="../account/notifications.html">Notifications</a></li>
  //                     <li><a className="nav-link u-header__sub-menu-nav-link" href="../account/activity.html">Activity</a></li>
  //                     <li><a className="nav-link u-header__sub-menu-nav-link" href="../account/payment-methods.html">Payment methods</a></li>
  //                     <li><a className="nav-link u-header__sub-menu-nav-link" href="../account/invite-friends.html">Invite friends</a></li>
  //                     <li><a className="nav-link u-header__sub-menu-nav-link" href="../account/plans.html">Plans</a></li>
  //                     <li><a className="nav-link u-header__sub-menu-nav-link" href="../account/api-token.html">API Token</a></li>
  //                   </ul>
  //                 </li>
                
  //                 <li className="hs-has-sub-menu">
  //                   <a id="navLinkPagesPortfolio" className="nav-link u-header__sub-menu-nav-link u-header__sub-menu-nav-link-toggle" href="javascript:;" aria-haspopup="true" aria-expanded="false" aria-controls="navSubmenuPagesPortfolio">Portfolio</a>

  //                   <ul id="navSubmenuPagesPortfolio" className="hs-sub-menu u-header__sub-menu" aria-labelledby="navLinkPagesPortfolio" style={{minWidth: '230px'}}>
  //                     <li><a className="nav-link u-header__sub-menu-nav-link" href="../portfolio/boxed-classNameic.html">All layouts</a></li>
  //                     <li className="dropdown-divider"></li>
  //                     <li><a className="nav-link u-header__sub-menu-nav-link" href="../portfolio/case-studies-simple.html">Case Studies Simple</a></li>
  //                     <li><a className="nav-link u-header__sub-menu-nav-link" href="../portfolio/case-studies-modern.html">Case Studies Modern</a></li>
  //                     <li className="dropdown-divider"></li>
  //                     <li><a className="nav-link u-header__sub-menu-nav-link" href="../portfolio/single-page-simple.html">Single Page Simple</a></li>
  //                     <li><a className="nav-link u-header__sub-menu-nav-link" href="../portfolio/single-page-grid.html">Single Page Grid</a></li>
  //                     <li><a className="nav-link u-header__sub-menu-nav-link" href="../portfolio/single-page-masonry.html">Single Page Masonry</a></li>
  //                   </ul>
  //                 </li>
             
  //                 <li className="hs-has-sub-menu">
  //                   <a id="navLinkPagesAbout" className="nav-link u-header__sub-menu-nav-link u-header__sub-menu-nav-link-toggle" href="javascript:;" aria-haspopup="true" aria-expanded="false" aria-controls="navSubmenuPagesAbout">About</a>

  //                   <ul id="navSubmenuPagesAbout" className="hs-sub-menu u-header__sub-menu" aria-labelledby="navLinkPagesAbout" style={{minWidth: '230px'}}>
  //                     <li><a className="nav-link u-header__sub-menu-nav-link" href="../pages/about-agency.html">About Agency</a></li>
  //                     <li><a className="nav-link u-header__sub-menu-nav-link" href="../pages/about-start-up.html">About Start-Up</a></li>
  //                   </ul>
  //                 </li>
               
  //                 <li className="hs-has-sub-menu">
  //                   <a id="navLinkPagesServices" className="nav-link u-header__sub-menu-nav-link u-header__sub-menu-nav-link-toggle" href="javascript:;" aria-haspopup="true" aria-expanded="false" aria-controls="navSubmenuPagesServices">Services</a>

  //                   <ul id="navSubmenuPagesServices" className="hs-sub-menu u-header__sub-menu" aria-labelledby="navLinkPagesServices" style={{minWidth: '230px'}}>
  //                     <li><a className="nav-link u-header__sub-menu-nav-link" href="../pages/services-agency.html">Services Agency</a></li>
  //                     <li><a className="nav-link u-header__sub-menu-nav-link" href="../pages/services-start-up.html">Services Start-Up</a></li>
  //                   </ul>
  //                 </li>
               
  //                 <li className="hs-has-sub-menu">
  //                   <a id="navLinkPagesCareers" className="nav-link u-header__sub-menu-nav-link u-header__sub-menu-nav-link-toggle" href="javascript:;" aria-haspopup="true" aria-expanded="false" aria-controls="navSubmenuPagesCareers">Careers</a>

  //                   <ul id="navSubmenuPagesCareers" className="hs-sub-menu u-header__sub-menu" aria-labelledby="navLinkPagesCareers" style={{minWidth: '230px'}}>
  //                     <li><a className="nav-link u-header__sub-menu-nav-link" href="../pages/careers.html">Careers</a></li>
  //                     <li><a className="nav-link u-header__sub-menu-nav-link" href="../pages/careers-single.html">Careers Single</a></li>
  //                     <li><a className="nav-link u-header__sub-menu-nav-link" href="../pages/hire-us.html">Hire Us</a></li>
  //                   </ul>
  //                 </li>
                
  //                 <li className="hs-has-sub-menu">
  //                   <a id="navLinkPagesLogin" className="nav-link u-header__sub-menu-nav-link u-header__sub-menu-nav-link-toggle" href="javascript:;" aria-haspopup="true" aria-expanded="false" aria-controls="navSubmenuPagesLogin">Login &amp; Signup</a>

  //                   <ul id="navSubmenuPagesLogin" className="hs-sub-menu u-header__sub-menu" aria-labelledby="navLinkPagesLogin" style={{minWidth: '230px'}}>
  //                     <li><a className="nav-link u-header__sub-menu-nav-link" href="../pages/login.html">Login</a></li>
  //                     <li><a className="nav-link u-header__sub-menu-nav-link" href="../pages/signup.html">Signup</a></li>
  //                     <li><a className="nav-link u-header__sub-menu-nav-link" href="../pages/recover-account.html">Recover Account</a></li>
  //                     <li className="dropdown-divider"></li>
  //                     <li><a className="nav-link u-header__sub-menu-nav-link" href="../pages/login-simple.html">Login Simple</a></li>
  //                     <li><a className="nav-link u-header__sub-menu-nav-link" href="../pages/signup-simple.html">Signup Simple</a></li>
  //                     <li><a className="nav-link u-header__sub-menu-nav-link" href="../pages/recover-account-simple.html">Recover Account Simple</a></li>
  //                   </ul>
  //                 </li>
             
  //                 <li className="hs-has-sub-menu">
  //                   <a id="navLinkContactsServices" className="nav-link u-header__sub-menu-nav-link u-header__sub-menu-nav-link-toggle" href="javascript:;" aria-haspopup="true" aria-expanded="false" aria-controls="navSubmenuContactsServices">Contacts</a>

  //                   <ul id="navSubmenuContactsServices" className="hs-sub-menu u-header__sub-menu" aria-labelledby="navLinkContactsServices" style={{minWidth: '230px'}}>
  //                     <li><a className="nav-link u-header__sub-menu-nav-link" href="../pages/contacts-agency.html">Contacts Agency</a></li>
  //                     <li><a className="nav-link u-header__sub-menu-nav-link" href="../pages/contacts-start-up.html">Contacts Start-Up</a></li>
  //                   </ul>
  //                 </li>
               
  //                 <li className="hs-has-sub-menu">
  //                   <a id="navLinkPagesResources" className="nav-link u-header__sub-menu-nav-link u-header__sub-menu-nav-link-toggle" href="javascript:;" aria-haspopup="true" aria-expanded="false" aria-controls="navSubmenuPagesResources">Resources</a>

  //                   <ul id="navSubmenuPagesResources" className="hs-sub-menu u-header__sub-menu" aria-labelledby="navLinkPagesResources" style={{minWidth: '230px'}}>
  //                     <li><a className="nav-link u-header__sub-menu-nav-link" href="../pages/help.html">Help</a></li>
  //                     <li><a className="nav-link u-header__sub-menu-nav-link" href="../pages/help-article.html">Help article</a></li>
  //                     <li><a className="nav-link u-header__sub-menu-nav-link" href="../pages/faq.html">FAQ</a></li>
  //                     <li><a className="nav-link u-header__sub-menu-nav-link" href="../pages/customers.html">Customers <span className="badge badge-success badge-pill ml-1">New</span></a></li>
  //                     <li><a className="nav-link u-header__sub-menu-nav-link" href="../pages/customer-story.html">Customer story <span className="badge badge-success badge-pill ml-1">New</span></a></li>
  //                   </ul>
  //                 </li>
              
  //                 <li className="hs-has-sub-menu">
  //                   <a id="navLinkPagesUtilities" className="nav-link u-header__sub-menu-nav-link u-header__sub-menu-nav-link-toggle" href="javascript:;" aria-haspopup="true" aria-expanded="false" aria-controls="navSubmenuPagesUtilities">Utilities</a>

  //                   <ul id="navSubmenuPagesUtilities" className="hs-sub-menu u-header__sub-menu" aria-labelledby="navLinkPagesUtilities" style={{minWidth: '230px'}}>
  //                     <li><a className="nav-link u-header__sub-menu-nav-link" href="../pages/pricing.html">Pricing</a></li>
  //                     <li><a className="nav-link u-header__sub-menu-nav-link" href="../pages/terms.html">Terms &amp; Conditions</a></li>
  //                     <li><a className="nav-link u-header__sub-menu-nav-link" href="../pages/privacy.html">Privacy &amp; Policy</a></li>
  //                   </ul>
  //                 </li>
               
  //                 <li className="hs-has-sub-menu">
  //                   <a id="navLinkPagesSpecialty" className="nav-link u-header__sub-menu-nav-link u-header__sub-menu-nav-link-toggle" href="javascript:;" aria-haspopup="true" aria-expanded="false" aria-controls="navSubmenuPagesSpecialty">Specialty</a>

  //                   <ul id="navSubmenuPagesSpecialty" className="hs-sub-menu u-header__sub-menu" aria-labelledby="navLinkPagesSpecialty" style={{minWidth: '230px'}}>
  //                     <li><a className="nav-link u-header__sub-menu-nav-link" href="../pages/cover-page.html">Cover Page</a></li>
  //                     <li><a className="nav-link u-header__sub-menu-nav-link" href="../pages/coming-soon.html">Coming Soon</a></li>
  //                     <li><a className="nav-link u-header__sub-menu-nav-link" href="../pages/maintenance-mode.html">Maintenance Mode</a></li>
  //                     <li><a className="nav-link u-header__sub-menu-nav-link" href="../pages/status.html">Status <span className="badge badge-success badge-pill ml-1">New</span></a></li>
  //                     <li><a className="nav-link u-header__sub-menu-nav-link" href="../pages/invoice.html">Invoice</a></li>
  //                     <li><a className="nav-link u-header__sub-menu-nav-link" href="../pages/error-404.html">Error 404</a></li>
  //                   </ul>
  //                 </li>
            
  //               </ul>
          
  //             </li>
          
  //             <li className="nav-item hs-has-sub-menu u-header__nav-item"
  //                 data-event="hover"
  //                 data-animation-in="slideInUp"
  //                 data-animation-out="fadeOut">
  //               <a id="blogMegaMenu" className="nav-link u-header__nav-link u-header__nav-link-toggle" href="javascript:;" aria-haspopup="true" aria-expanded="false" aria-labelledby="blogSubMenu">Blog</a>

               
  //               <ul id="blogSubMenu" className="hs-sub-menu u-header__sub-menu" aria-labelledby="blogMegaMenu" style={{minWidth: '230px'}}>
               
  //                 <li className="hs-has-sub-menu">
  //                   <a id="navLinkBlogClassic" className="nav-link u-header__sub-menu-nav-link u-header__sub-menu-nav-link-toggle" href="javascript:;" aria-haspopup="true" aria-expanded="false" aria-controls="navSubmenuBlogClassic">Classic</a>

  //                   <ul id="navSubmenuBlogClassic" className="hs-sub-menu u-header__sub-menu" aria-labelledby="navLinkBlogClassic" style={{minWidth: '230px'}}>
  //                     <li><a className="nav-link u-header__sub-menu-nav-link" href="../blog/classNameic-left-sidebar.html">Left Sidebar</a></li>
  //                     <li><a className="nav-link u-header__sub-menu-nav-link" href="../blog/classNameic-right-sidebar.html">Right Sidebar</a></li>
  //                     <li><a className="nav-link u-header__sub-menu-nav-link" href="../blog/classNameic-full-width.html">Full Width</a></li>
  //                   </ul>
  //                 </li>
              
  //                 <li className="hs-has-sub-menu">
  //                   <a id="navLinkBlogGrid" className="nav-link u-header__sub-menu-nav-link u-header__sub-menu-nav-link-toggle" href="javascript:;" aria-haspopup="true" aria-expanded="false" aria-controls="navSubmenuBlogGrid">Grid</a>

  //                   <ul id="navSubmenuBlogGrid" className="hs-sub-menu u-header__sub-menu" aria-labelledby="navLinkBlogGrid" style={{minWidth: '230px'}}>
  //                     <li><a className="nav-link u-header__sub-menu-nav-link" href="../blog/grid-left-sidebar.html">Left Sidebar</a></li>
  //                     <li><a className="nav-link u-header__sub-menu-nav-link" href="../blog/grid-right-sidebar.html">Right Sidebar</a></li>
  //                     <li><a className="nav-link u-header__sub-menu-nav-link" href="../blog/grid-full-width.html">Full Width</a></li>
  //                   </ul>
  //                 </li>
               
  //                 <li className="hs-has-sub-menu">
  //                   <a id="navLinkBlogList" className="nav-link u-header__sub-menu-nav-link u-header__sub-menu-nav-link-toggle" href="javascript:;" aria-haspopup="true" aria-expanded="false" aria-controls="navSubmenuBlogList">List</a>

  //                   <ul id="navSubmenuBlogList" className="hs-sub-menu u-header__sub-menu" aria-labelledby="navLinkBlogList" style={{minWidth: '230px'}}>
  //                     <li><a className="nav-link u-header__sub-menu-nav-link" href="../blog/list-left-sidebar.html">Left Sidebar</a></li>
  //                     <li><a className="nav-link u-header__sub-menu-nav-link" href="../blog/list-right-sidebar.html">Right Sidebar</a></li>
  //                     <li><a className="nav-link u-header__sub-menu-nav-link" href="../blog/list-full-width.html">Full Width</a></li>
  //                   </ul>
  //                 </li>
                
  //                 <li className="hs-has-sub-menu">
  //                   <a id="navLinkBlogCard" className="nav-link u-header__sub-menu-nav-link u-header__sub-menu-nav-link-toggle" href="javascript:;" aria-haspopup="true" aria-expanded="false" aria-controls="navSubmenuBlogCard">Modern</a>

  //                   <ul id="navSubmenuBlogCard" className="hs-sub-menu u-header__sub-menu" aria-labelledby="navLinkBlogCard" style={{minWidth: '230px'}}>
  //                     <li><a className="nav-link u-header__sub-menu-nav-link" href="../blog/modern-left-sidebar.html">Left Sidebar</a></li>
  //                     <li><a className="nav-link u-header__sub-menu-nav-link" href="../blog/modern-right-sidebar.html">Right Sidebar</a></li>
  //                     <li><a className="nav-link u-header__sub-menu-nav-link" href="../blog/modern-full-width.html">Full Width</a></li>
  //                   </ul>
  //                 </li>
               
  //                 <li className="hs-has-sub-menu">
  //                   <a id="navLinkBlogGridMinimal" className="nav-link u-header__sub-menu-nav-link u-header__sub-menu-nav-link-toggle" href="javascript:;" aria-haspopup="true" aria-expanded="false" aria-controls="navSubmenuBlogGridMinimal">Masonry</a>

  //                   <ul id="navSubmenuBlogGridMinimal" className="hs-sub-menu u-header__sub-menu" aria-labelledby="navLinkBlogGridMinimal" style={{minWidth: '230px'}}>
  //                     <li><a className="nav-link u-header__sub-menu-nav-link" href="../blog/masonry-left-sidebar.html">Left Sidebar</a></li>
  //                     <li><a className="nav-link u-header__sub-menu-nav-link" href="../blog/masonry-right-sidebar.html">Right Sidebar</a></li>
  //                     <li><a className="nav-link u-header__sub-menu-nav-link" href="../blog/masonry-full-width.html">Full Width</a></li>
  //                   </ul>
  //                 </li>
              
  //                 <li className="hs-has-sub-menu">
  //                   <a id="navLinkBlogGridMasonry" className="nav-link u-header__sub-menu-nav-link u-header__sub-menu-nav-link-toggle" href="javascript:;" aria-haspopup="true" aria-expanded="false" aria-controls="navSubmenuBlogGridMasonry">Single Article</a>

  //                   <ul id="navSubmenuBlogGridMasonry" className="hs-sub-menu u-header__sub-menu" aria-labelledby="navLinkBlogGridMasonry" style={{minWidth: '230px'}}>
  //                     <li><a className="nav-link u-header__sub-menu-nav-link" href="../blog/single-article-classNameic.html">Classic</a></li>
  //                     <li><a className="nav-link u-header__sub-menu-nav-link" href="../blog/single-article-simple.html">Simple</a></li>
  //                   </ul>
  //                 </li>
               
  //               </ul>
            
  //             </li>
           
  //             <li className="nav-item hs-has-mega-menu u-header__nav-item"
  //                 data-event="hover"
  //                 data-animation-in="slideInUp"
  //                 data-animation-out="fadeOut"
  //                 data-max-width="440px"
  //                 data-position="right">
  //               <a id="shopMegaMenu" className="nav-link u-header__nav-link u-header__nav-link-toggle" href="javascript:;" aria-haspopup="true" aria-expanded="false">Shop</a>

            
  //               <div className="hs-mega-menu u-header__sub-menu u-header__mega-menu-position-right-fix--md" aria-labelledby="shopMegaMenu">
  //                 <div className="u-header__mega-menu-wrapper">
  //                   <span className="u-header__sub-menu-title">Shop Elements</span>

  //                   <div className="row">
  //                     <div className="col-sm-6">
  //                       <ul className="u-header__sub-menu-nav-group">
  //                         <li><a className="nav-link u-header__sub-menu-nav-link" href="../shop/classNameic.html">Classic</a></li>
  //                         <li><a className="nav-link u-header__sub-menu-nav-link" href="../shop/masonry.html">Masonry</a></li>
  //                         <li><a className="nav-link u-header__sub-menu-nav-link" href="../shop/single-product.html">Single Product</a></li>
  //                       </ul>
  //                     </div>

  //                     <div className="col-sm-6">
  //                       <ul className="u-header__sub-menu-nav-group">
  //                         <li><a className="nav-link u-header__sub-menu-nav-link" href="../shop/cart.html">Cart</a></li>
  //                         <li><a className="nav-link u-header__sub-menu-nav-link" href="../shop/checkout.html">Checkout</a></li>
  //                       </ul>
  //                     </div>
  //                   </div>
  //                 </div>

                
  //                 <div className="u-header__product-banner">
  //                   <div className="d-flex align-items-end">
  //                     <img className="img-fluid mr-4" src="../../assets/img/mockups/img4.png" alt="Image Description" />
  //                     <div className="u-header__product-banner-content">
  //                       <div className="mb-4">
  //                         <span className="u-header__product-banner-title">Win T-shirt</span>
  //                         <p className="u-header__product-banner-text">Win one of our Front brand T-shirts.</p>
  //                       </div>
  //                       <a className="btn btn-sm btn-soft-primary transition-3d-hover" href="../shop/classNameic.html">Learn More <span className="fas fa-angle-right ml-2"></span></a>
  //                     </div>
  //                   </div>
  //                 </div>
      
  //               </div>
          
  //             </li>
             
  //             <li className="nav-item hs-has-mega-menu u-header__nav-item"
  //                 data-event="hover"
  //                 data-animation-in="slideInUp"
  //                 data-animation-out="fadeOut"
  //                 data-max-width="600px"
  //                 data-position="right">
  //               <a id="demosMegaMenu" className="nav-link u-header__nav-link u-header__nav-link-toggle" href="javascript:;" aria-haspopup="true" aria-expanded="false">Demos</a>

             
  //               <div className="hs-mega-menu w-100 u-header__sub-menu" aria-labelledby="demosMegaMenu">
  //                 <div className="row no-gutters">
  //                   <div className="col-md-6">
                   
  //                     <div className="u-header__promo-item">
  //                       <a className="u-header__promo-link" href="../house/index.html">
  //                         <div className="media align-items-center">
  //                           <img className="js-svg-injector u-header__promo-icon" src="../../assets/svg/icons/icon-13.svg" alt="SVG" />
  //                           <div className="media-body">
  //                             <span className="u-header__promo-title">House</span>
  //                             <small className="u-header__promo-text">Real estate demo.</small>
  //                           </div>
  //                         </div>
  //                       </a>
  //                     </div>
                     
  //                     <div className="u-header__promo-item">
  //                       <a className="u-header__promo-link" href="../job/index.html">
  //                         <div className="media align-items-center">
  //                           <img className="js-svg-injector u-header__promo-icon" src="../../assets/svg/icons/icon-19.svg" alt="SVG" />
  //                           <div className="media-body">
  //                             <span className="u-header__promo-title">Job</span>
  //                             <small className="u-header__promo-text">Job vacancy demo.</small>
  //                           </div>
  //                         </div>
  //                       </a>
  //                     </div>
                     
  //                     <div className="u-header__promo-item">
  //                       <a className="u-header__promo-link" href="../crypto/index.html">
  //                         <div className="media align-items-center">
  //                           <img className="js-svg-injector u-header__promo-icon" src="../../assets/svg/icons/icon-5.svg" alt="SVG" />
  //                           <div className="media-body">
  //                             <span className="u-header__promo-title">Crypto landing</span>
  //                             <small className="u-header__promo-text">Cryptocurrency demo.</small>
  //                           </div>
  //                         </div>
  //                       </a>
  //                     </div>
                    
  //                   </div>

                   
  //                   <div className="col-md-6 u-header__promo">
  //                     <a className="d-block u-header__promo-inner" href="#">
  //                       <div className="position-relative">
  //                         <img className="img-fluid rounded mb-3" src="../../assets/img/380x227/img6.jpg" alt="Image Description" />
  //                         <span className="badge badge-success badge-pill badge-pos shadow-sm mt-3">New</span>
  //                       </div>
  //                       <span className="text-secondary font-size-1">Front makes you look at things from a different perspectives.</span>
  //                     </a>
  //                   </div>
                 
  //                 </div>
  //               </div>
                
  //             </li>
              
  //             <li className="nav-item hs-has-mega-menu u-header__nav-item"
  //                 data-event="hover"
  //                 data-animation-in="slideInUp"
  //                 data-animation-out="fadeOut"
  //                 data-max-width="260px"
  //                 data-position="right">
  //               <a id="docsMegaMenu" className="nav-link u-header__nav-link u-header__nav-link-toggle" href="javascript:;" aria-haspopup="true" aria-expanded="false">Docs</a>

            
  //               <div className="hs-mega-menu u-header__sub-menu" aria-labelledby="docsMegaMenu" style={{minWidth: '330px'}}>
               
  //                 <div className="u-header__promo-item">
  //                   <a className="u-header__promo-link" href="../../documentation/index.html">
  //                     <div className="media align-items-center">
  //                       <img className="js-svg-injector u-header__promo-icon" src="../../assets/svg/icons/icon-2.svg" alt="SVG" />
  //                       <div className="media-body">
  //                         <span className="u-header__promo-title">
  //                           Documentation
  //                           <span className="badge badge-primary badge-pill ml-1">v2.4</span>
  //                         </span>
  //                         <small className="u-header__promo-text">Development guides</small>
  //                       </div>
  //                     </div>
  //                   </a>
  //                 </div>
              
  //                 <div className="u-header__promo-item">
  //                   <a className="u-header__promo-link" href="../../starter/index.html">
  //                     <div className="media align-items-center">
  //                       <img className="js-svg-injector u-header__promo-icon" src="../../assets/svg/icons/icon-1.svg" alt="SVG" />
  //                       <div className="media-body">
  //                         <span className="u-header__promo-title">Get started</span>
  //                         <small className="u-header__promo-text">Components and snippets</small>
  //                       </div>
  //                     </div>
  //                   </a>
  //                 </div>
             

  //                 <div className="u-header__promo-footer">
                  
  //                   <div className="row no-gutters">
  //                     <div className="col-6">
  //                       <div className="u-header__promo-footer-item">
  //                         <small className="text-muted d-block">Check what's new</small>
  //                         <a className="small" href="../../documentation/getting-started/changelog.html">
  //                           Changelog
  //                         </a>
  //                       </div>
  //                     </div>
  //                     <div className="col-6 u-header__promo-footer-ver-divider">
  //                       <div className="u-header__promo-footer-item">
  //                         <small className="text-muted d-block">Have a question?</small>
  //                         <a className="small" href="http://htmlstream.com/contact-us">
  //                           Contact us
  //                         </a>
  //                       </div>
  //                     </div>
  //                   </div>
                 
  //                 </div>
  //               </div>
                
  //             </li>
             
  //             <li className="nav-item u-header__nav-last-item">
  //               <a className="btn btn-sm btn-primary transition-3d-hover" href="https://themes.getbootstrap.com/product/front-multipurpose-responsive-template/" target="_blank">
  //                 Buy Now
  //               </a>
  //             </li>
             
  //           </ul>
  //         </div>
    
  //       </nav>
  //     </div>
  //     </div>
  //   </div>
  // </header>


    );

    const guestLinks = (
      <ul className="navbar-nav ml-auto">
        <li className="nav-item active">
          <Link className="nav-link" to="/login">
            Login
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link btn btn-sm btn-outline-primary text-primary" to="/register">
            Sign Up
          </Link>
        </li>
      </ul>
    );

    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top" style={{boxShadow: '0 4px 3px rgba(0, 0, 0, 0.1)'}}>
        <div className="container">
        <Link className="navbar-brand" to="/">
          LinkedOut
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          {isAuthenticated ? authLinks : guestLinks}
        </div>
        </div>
      </nav>
    );
  }
}

Navbar.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser, clearCurrentProfile }
)(Navbar);
