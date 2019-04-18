import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { deleteComment } from '../../../actions/postActions';

class CommentItem extends Component {

    onDeleteClick(postId, commentId) {
        this.props.deleteComment(postId, commentId);
    }

  render() {

    const { comment, post, auth } = this.props;

    return (
      <div>
        <div className="card card-body mb-3">
              <div className="row">
                <div className="col-md-2">
                  <Link href="profile.html">
                    <img className="rounded-circle d-none d-md-block" src={comment.avatar} alt="" />
                  </Link>
                  <br />
                  <p className="text-center">{comment.name}</p>
                </div>
                <div className="col-md-10">
                  <p className="lead">{comment.text}</p>
                  {comment.user === auth.user.id ? (
                      <button onClick={this.onDeleteClick.bind(this, post._id, comment._id)} className="btn btn-danger mr-1" type="button">&times; Remove</button>
                  ) : null}
                </div>
              </div>
            </div>
      </div>
    )
  }
}


CommentItem.propTypes = {
    deleteComment: PropTypes.func.isRequired,
    comment: PropTypes.object.isRequired,
    postId: PropTypes.string.isRequired,
    auth: PropTypes.object.isRequired
};


const mapStateToProps = state => ({
    auth: state.auth
});


export default connect(mapStateToProps, { deleteComment })(CommentItem);
