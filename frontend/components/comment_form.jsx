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
  onFocus(){
    this.setState({commentButton: true});
  },
  onBlur(e){
    this.setState({commentButton: false});
  },
  render: function() {
    return (
      <div className="comments-form">
        <form className="comment-form-field">
          <textarea ref="commentInput"
                    onChange={this.updateBody}
                    onFocus={this.onFocus}
                    onBlur={this.onBlur}
                    placeholder="Add a comment"></textarea>
          <input className="comment-button"
                    type="submit"
                    value="Comment"
                    onMouseDown={this.createComment}></input>
          <div className="comment-arrow"></div>
        </form>
      </div>
    );
  }

});

module.exports = CommentForm;
