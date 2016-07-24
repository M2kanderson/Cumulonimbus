const React = require('react');
const ReactDOM = require('react-dom');
const CommentStore = require('../stores/comment_store');
const SessionStore = require('../stores/session_store');
const CommentActions = require('../actions/comment_actions');



const CommentForm = React.createClass({
  getInitialState: function() {
    return {
      commentButton: false,
      body: ""
    };
  },
  updateBody(e){
    this.setState({body:e.target.value});
  },
  createComment(e){
    e.preventDefault();
    CommentActions.createComment({body: this.state.body,
                                user_id: SessionStore.currentUser().id,
                                track_id: this.props.trackId});
    this.setState({body:""});
    ReactDOM.findDOMNode(this.refs.commentInput).value = "";
  },
  render: function() {
    return (
      <div className="comments-form">
        <form className="comment-form-field" onSubmit={this.createComment}>
          <input ref="commentInput"
                    onChange={this.updateBody}
                    placeholder="Add a comment"></input>
        </form>
      </div>
    );
  }

});

module.exports = CommentForm;
