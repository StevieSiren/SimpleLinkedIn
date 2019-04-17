import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import classnames from 'classnames';

class PostItem extends Component {

    onDeleteClick(id) {
        console.log(id);
    }

  render() {

    const { post, auth } = this.props;

    return (
      <React.Fragment>
          <div className="card card-body mb-3">
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
                  <button type="button" className="btn btn-light mr-1">
                    <i className="text-info fas fa-thumbs-up"></i>
                    <span className="badge badge-light">4</span>
                  </button>
                  <button type="button" className="btn btn-light mr-1">
                    <i className="text-secondary fas fa-thumbs-down"></i>
                  </button>
                  <a href="post.html" className="btn btn-info mr-1">
                    Comments
                  </a>
                  {post.user === auth.user.id ? (
                      <button onClick={this.onDeleteClick.bind(this, post._id)} className="btn btn-danger mr-1" type="button">&times;</button>
                  ) : null}
                </div>
              </div>
            </div>
      </React.Fragment>
    )
  }
}


PostItem.propTypes = {
    post: PropTypes.object.isRequired,
    auth: PropTypes.object.isRequired
}


const mapStateToProps = state => ({
    auth: state.auth
});


export default connect(mapStateToProps, {})(PostItem);
