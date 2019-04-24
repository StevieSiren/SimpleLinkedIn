import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import PostForm from './PostForm';
import PostFeed from './PostFeed';
import Spinner from '../common/Spinner';

import { getPosts } from '../../actions/postActions';

class Posts extends Component {

    componentDidMount() {
        this.props.getPosts();
    }

  render() {

    const { posts, loading } = this.props.post;
    const { auth } = this.props;
    let postContent;

    if(posts === null || loading) {
        postContent = <Spinner />
    } else {
        postContent = <PostFeed posts={posts} />
    }

    return (
      <React.Fragment>
          <div className="container">
            <div className="row">
                <div className="col-lg-3 space-lg-2">
                <div className="card p-1 mb-4 sticky-top sticky-offset">
                    <div className="card-body text-center">
                        <div className="mb-3">
                            <img src={auth.user.avatar} alt="" className="u-lg-avatar rounded-circle"/>
                        </div>
                        <div className="mb-3">
                            <h1 className="h6 font-weight-medium mb-0">
                                {auth.user.name}
                            </h1>
                    
                        </div>
                        <div className="mb-2">
                            <Link to="/profile" className="btn btn-sm btn-soft-secondary transition-3d-hover"><span className="mr-2 far fa-hand-point-left"></span>Back to Profile</Link>
                        </div>
                
                    </div>
                    </div>
                </div>
                <div className="col-lg-9">
                    <PostForm />
                    {postContent}
                </div>
            </div>
          </div>
      </React.Fragment>
    )
  }
}


Posts.propTypes = {
    getPosts: PropTypes.func.isRequired,
    post: PropTypes.object.isRequired
}


const mapStateToProps = state => ({
    post: state.post,
    auth: state.auth
});


export default connect(mapStateToProps, { getPosts })(Posts);
