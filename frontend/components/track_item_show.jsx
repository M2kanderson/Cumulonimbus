var React = require('react');
const TrackActions = require('../actions/track_actions');
const TrackStore = require('../stores/tracks_store');
const Comments = require('./comments');
const CommentForm = require('./comment_form');
const LikeActions = require('../actions/like_actions');
const SessionStore = require('../stores/session_store');
const PlayerActions = require('../actions/player_actions');
const PlayerStore = require('../stores/player_store');

var TrackItemShow = React.createClass({
  getInitialState: function() {
    TrackActions.fetchTrack(this.props.params.trackId);
    let potentialTrack = TrackStore.find(parseInt(this.props.params.trackId));
    return {
      track: potentialTrack ? potentialTrack : {},
      currentUser: SessionStore.currentUser(),
      trackPlaying: PlayerStore.songIsPlaying(this.props.params.trackId)
    };
  },
  componentDidMount: function(){
    this.trackListener = TrackStore.addListener(this._trackChanged);
    this.playerListener = PlayerStore.addListener(this._onPlayerChange);
  },
  _onPlayerChange(){
    this.setState({trackPlaying: PlayerStore.songIsPlaying(this.props.params.trackId)});
  },
  _trackChanged(){
    let potentialTrack = TrackStore.find(parseInt(this.props.params.trackId));
    this.setState({track: potentialTrack ? potentialTrack : {}});
  },
  _userChanged(){
    this.setState({currentUser: SessionStore.currentUser()});
  },
  componentWillReceiveProps(nextProps){
    let potentialTrack = TrackStore.find(parseInt(nextProps.params.trackId));
    this.setState({track: potentialTrack ? potentialTrack : {}});
  },
  componentWillUnmount(){
    // this.userListener.remove();
    this.trackListener.remove();
    this.playerListener.remove();
  },
  _isLiked: function(){
    let likeText = "Like";
    let currentUser = this.state.currentUser;
    let currentUserLikes = currentUser.liked_tracks;
    if(currentUserLikes){
      if(currentUserLikes.indexOf(this.state.track.id) !== -1){
        likeText = "Unlike";
      }
    }
    return likeText;
  },
  toggleLike(){
    let data = {track_id : this.state.track.id};

    if(this._isLiked() === "Like"){
      LikeActions.createLike(data);
    } else{
      LikeActions.deleteLike(data);
    }
  },
  _toggleTrack(){
    PlayerActions.toggleTrack(this.state.track);
  },
  render: function() {
    let commentForm = SessionStore.isUserLoggedIn() ?
        <CommentForm trackId={this.props.params.trackId}/> : "";
    let playClass = this.state.trackPlaying ?
        "fa fa-pause fa-4x": "fa fa-play fa-4x";
    return (
      <div className="track-item-show">
        <div className="track-item-show-player">
          <div className="track-item-show-player-left">
            <div className="track-item-show-player-play"
                 onClick={this._toggleTrack}>
              <i className={playClass} aria-hidden="true"></i>
            </div>
            <div className="track-item-show-player-info">
              <p className="track-item-show-artist">
                  {this.state.track.artist}</p>
              <p className="track-item-show-title">
                  {this.state.track.title}</p>
            </div>
          </div>

          <div className="track-item-show-player-right">
            <img className="track-item-show-cover"
                 src={this.state.track.image_url}></img>
          </div>

        </div>
        {commentForm}
        <div className="track-item-show-data">
          <div className="like-container">
            <button className="like-button" onClick={this.toggleLike}>
              {this._isLiked() === "Like" ?
                <i className="fa fa-heart" aria-hidden="true"></i> :
                <i className="fa fa-heart red" aria-hidden="true"></i>}
            </button>
          </div>
          <div className="track-item-show-stats">
            <div className="like-counter">
              <i className="fa fa-heart" aria-hidden="true"></i>
              <div className="likes">
                {this.state.track.like_count}
              </div>
            </div>
            <div className="play-counter">
              <i className="fa fa-play" aria-hidden="true"></i>
              <div className="play-count">{0}</div>
            </div>
          </div>

        </div>

        <Comments trackId={this.state.track.id}></Comments>
      </div>
    );
  }

});

module.exports = TrackItemShow;
