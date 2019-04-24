import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import TextAreaGroup from '../common/TextAreaGroup';

import { addPost } from '../../actions/postActions';

class PostForm extends Component {
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
        const newPost = {
            text: this.state.text,
            name: user.name,
            avatar: user.avatar
        };

        this.props.addPost(newPost);
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
          <div className="space-lg-2">
          <div className="mb-3">
            <div className="card card-info">
              <div className="card-header bg-primary text-white">
              <i class="fas fa-bullhorn mr-3"></i> Share something great you've accomplished
              </div>
              <div className="card-body">
                <form onSubmit={this.onSubmit}>
                  <div className="form-group">
                    <TextAreaGroup 
                    placeholder="What's on your mind?"
                    name="text"
                    value={this.state.text}
                    onChange={this.onChange}
                    error={errors.text}
                    />
                  </div>
                  <button type="submit" className="btn btn-outline-primary btn-sm">Post</button>
                </form>
              </div>
            </div>
          </div>
          </div>
      </React.Fragment>
    )
  }
}


PostForm.propTypes = {
    addPost: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired,
    auth: PropTypes.object.isRequired
}


const mapStateToProps = state => ({
    errors: state.errors,
    auth: state.auth
});


export default connect(mapStateToProps, { addPost })(PostForm);
