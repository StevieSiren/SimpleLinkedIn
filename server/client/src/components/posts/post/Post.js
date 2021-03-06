import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Spinner from '../../common/Spinner';
import PostItem from '../PostItem';
import CommentForm from './CommentForm';
import CommentFeed from './CommentFeed';

import { getPost } from '../../../actions/postActions';

class Post extends Component {

    componentDidMount() {
        this.props.getPost(this.props.match.params.id);
    }

  render() {

    const { post, loading } = this.props.post;
    let postContent;

    if(post === null || loading || Object.keys(post).length === 0) {
        postContent = <Spinner />;
    } else {
        postContent = <div>
            <PostItem post={post} showActions={false} />
            <CommentForm postId={post._id} />
            <h4 className="h5 text-primary mt-4">Replies</h4>
            <CommentFeed postId={post._id} comments={post.comments} />
        </div>
                    
    }

    return (
      <React.Fragment>
          <div className="container space-lg-2">
            <div className="row">
                <div className="col-md-12">
                    <Link to="/feed" className="btn btn-light mb-5">Back to Feed</Link>
                    {postContent}
                </div>
            </div>
          </div>
      </React.Fragment>
    )
  }
}


Post.propTypes = {
    getPost: PropTypes.func.isRequired,
    post: PropTypes.object.isRequired
}


const mapStateToProps = state => ({
    post: state.post
})


export default connect(mapStateToProps, { getPost })(Post);
