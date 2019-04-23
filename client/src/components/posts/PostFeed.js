import React, { Component } from 'react';
import PropTypes from 'prop-types';

import PostItem from './PostItem';

class PostFeed extends Component {
  render() {

    const { posts } = this.props;

    return (
      <div style={{minHeight: '100vh'}}>
        {posts.map(post => <PostItem key={post._id} post={post} />)}
      </div>
    )
  }
}


PostFeed.propTypes = {
    posts: PropTypes.array.isRequired
};


export default PostFeed;
