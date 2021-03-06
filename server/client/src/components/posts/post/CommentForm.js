import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import TextAreaGroup from '../../common/TextAreaGroup';

import { addComment } from '../../../actions/postActions';

class CommentForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '',
            errors: {}
        };

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.errors) {
            this.setState({
                errors: nextProps.errors
            });
        }
    }

    onSubmit(e) {
        e.preventDefault();

        const { user } = this.props.auth;
        const { postId } = this.props;
        
        const newComment = {
            text: this.state.text,
            name: user.name,
            avatar: user.avatar
        };

        this.props.addComment(postId, newComment);
        this.setState({
            text: ''
        });
    }

    onChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

  render() {

    const { errors } = this.state;

    return (
      <React.Fragment>
          
          <div className="post-form mb-3">
            <div className="card card-info">
              
              <div className="card-body">
                <form onSubmit={this.onSubmit}>
                  <div className="form-group">
                    <TextAreaGroup 
                    placeholder="Add a comment..."
                    name="text"
                    value={this.state.text}
                    onChange={this.onChange}
                    error={errors.text}
                    />
                  </div>
                  <button type="submit" className="btn btn-outline-primary btn-sm">Reply</button>
                </form>
              </div>
            </div>
          </div>
          
      </React.Fragment>
    )
  }
}


CommentForm.propTypes = {
    addComment: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired,
    postId: PropTypes.string.isRequired,
    auth: PropTypes.object.isRequired
}


const mapStateToProps = state => ({
    errors: state.errors,
    auth: state.auth
});


export default connect(mapStateToProps, { addComment })(CommentForm);
