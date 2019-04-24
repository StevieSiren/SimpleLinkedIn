import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import classnames from 'classnames';

import { deletePost, addLike, removeLike } from '../../actions/postActions';

class PostItem extends Component {

    onDeleteClick(id) {
        this.props.deletePost(id);
    }

    onLikeClick(id) {
        this.props.addLike(id);
    }

    onUnlikeClick(id) {
        this.props.removeLike(id);
    }

    findUserLike(likes) {
        const { auth } = this.props;
        if(likes.filter(like => like.user === auth.user.id).length > 0) {
            return true;
        } else {
            return false;
        }
    }

  render() {

    const { post, auth, showActions } = this.props;

    return (
      <React.Fragment>
          {/* <div className="card card-body mb-3">
              <div className="row">
                <div className="col-md-2">
                  <a href="profile.html">
                    <img className="rounded-circle d-none d-md-block" src={auth.user.avatar}
                      alt="" />
                  </a>
                  <br />
                  <p className="text-center">{auth.user.name}</p>
                </div>
                <div className="col-md-10">
                  <p className="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint possimus corporis sunt necessitatibus! Minus
                    nesciunt soluta suscipit nobis. Amet accusamus distinctio cupiditate blanditiis dolor? Illo perferendis
                    eveniet cum cupiditate aliquam?</p>
                  <button onClick={this.onLikeClick.bind(this, post._id)} type="button" className="btn btn-light mr-1">
                    <i className={classnames('fas fa-thumbs-up', {
                        'text-info': this.findUserLike(post.likes)
                    })}></i>
                    <span className="badge badge-light">{post.likes.length}</span>
                  </button>
                  <button onClick={this.onUnlikeClick.bind(this, post._id)} type="button" className="btn btn-light mr-1">
                    <i className="text-secondary fas fa-thumbs-down"></i>
                  </button>
                  <Link to={'/post/' + post._id} className="btn btn-info mr-1">
                    Comments
                  </Link>
                  {post.user === auth.user.id ? (
                      <button onClick={this.onDeleteClick.bind(this, post._id)} className="btn btn-danger mr-1" type="button">&times;</button>
                  ) : null}
                </div>
              </div>
            </div> */}
        <div className="media mb-3">
            <img src={auth.user.avatar} alt="" className="u-avatar rounded-circle mr-3"/>
            <div className="media-body align-self-center">
              <h4 className="d-inline-block h5 mb-0">{auth.user.name}</h4>
            </div>
            <div className="media-body text-right">
            {post.user === auth.user.id ? (
                      <button onClick={this.onDeleteClick.bind(this, post._id)} className="btn btn-danger btn-xs mr-1" type="button">Remove</button>
                  ) : null}
            </div>
        </div>
        <p className="text-body">{post.text}</p>
        <ul className="list-inline d-flex">
              <li className="list-inline-item">
              <button onClick={this.onLikeClick.bind(this, post._id)} type="button" className="btn btn-light btn-xs mr-1">
                    <i className={classnames('far fa-thumbs-up', {
                        'text-primary': this.findUserLike(post.likes)
                    })}></i>
                    <span className="badge badge-light">{post.likes.length}</span>
                  </button>
              </li>
              <li className="list-inline-item">
              <button type="button" onClick={this.onUnlikeClick.bind(this, post._id)} type="button" className="btn btn-light btn-xs mr-1">
                    <i className="text-secondary far fa-thumbs-down"></i>
                  </button> 
              </li>
              <li className="list-inline-item ml-auto">
                  <Link to={`/post/${post._id}`} className="mr-1 text-secondary disabled">
                    <i className="text-secondary far fa-comments"></i> Reply
                  </Link>  
              </li>
        </ul>
        <hr className="mb-5"/>    
      </React.Fragment>
    )
  }
}


PostItem.propTypes = {
    post: PropTypes.object.isRequired,
    auth: PropTypes.object.isRequired,
    deletePost: PropTypes.func.isRequired,
    addLike: PropTypes.func.isRequired,
    removeLike: PropTypes.func.isRequired
};


const mapStateToProps = state => ({
    auth: state.auth
});


export default connect(mapStateToProps, { deletePost, addLike, removeLike })(PostItem);
