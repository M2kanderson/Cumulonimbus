const React = require('react');
const CommentStore = require('../stores/comment_store');
const SessionStore = require('../stores/session_store');
const CommentActions = require('../actions/comment_actions');
const CommentForm = require('./comment_form');
const CommentShow = require('./comment_show');



const TrackComments = React.createClass({
  getInitialState: function() {
    return {
      comments: CommentStore.all()
    };
  },
  componentWillMount(){
    this.commentListener = CommentStore.addListener(this._onChange);
    CommentActions.fetchTrackComments(this.props.trackId);
  },
  _onChange(){
    this.setState({comments: CommentStore.all()});
  },
  componentWillUnmount(){
    this.commentListener.remove();
  },
  componentWillReceiveProps(nextProps){
    if(this.props.trackId !== nextProps.trackId){
      CommentActions.fetchTrackComments(nextProps.trackId);
    }
  },
  comments(){
    let comments = this.state.comments.slice(0);

    return comments.reverse().map((comment)=>{
      return(<CommentShow key={comment.id} comment={comment}/>);
    });
  },
  render: function() {
    return (
      <div className="comments-container">
        <h1 className="comment-header">Comments</h1>
        <ul className="comments">
          {this.comments()}
        </ul>

      </div>
    );
  }

});

module.exports = TrackComments;
