const React = require('react');
const ReactRouter = require('react-router');
const hashHistory = ReactRouter.hashHistory;
const SessionStore = require('../stores/session_store');
const LikeActions = require('../actions/like_actions');
const PlayerActions = require('../actions/player_actions');
var ReactTooltip = require("react-tooltip");

const TrackIndexItem = React.createClass({
  getInitialState: function() {
    return {
      currentUser: SessionStore.currentUser()
    };
  },
  componentDidMount(){
    this.userListener = SessionStore.addListener(this._userChanged);
  },
  _userChanged(){
    // this.setState({currentUser: SessionStore.currentUser});
  },
  _isLiked: function(){
    let likeText = "Like";
    let currentUser = this.state.currentUser;
    if(currentUser.liked_tracks){
      let currentUserLikes = currentUser.liked_tracks;

      if(currentUserLikes.indexOf(this.props.track.id) !== -1){
        likeText = "Unlike";
      }
    }
    return likeText;
  },

  toggleLike(){
    let data = {track_id : this.props.track.id};

    if(this._isLiked() === "Like"){
      LikeActions.createLike(data);
    } else{
      LikeActions.deleteLike(data);
    }
  },
  _showTrack(){
    hashHistory.push(`/tracks/${this.props.track.id}`);
  },
  render(){
    let text = this.props.track.title;
    if (this.props.track.artist) {
      text += ` - ${this.props.track.artist}`;
    }


    return (
      <li className="track-index-item">
        <div className="track-container">
          <div className="track-image">
            <img onClick={this._showTrack} src={this.props.track.image_url} width="225" height="225"/>
            <span className="track-image-overlay" id={`overlay-${this.props.track.id}`}></span>
          </div>
          <div className="track-item-data">
            <div className="track-item-data-left">
              <div className="like-container">
                <button className="like-button"
                        data-tip={"Likes: " +this.props.track.like_count}
                        onClick={this.toggleLike}>
                  {this._isLiked() === "Like" ?
                    <i className="fa fa-heart" aria-hidden="true"></i> :
                    <i className="fa fa-heart red" aria-hidden="true"></i>}
                  <div className="likes">
                    {this.props.track.like_count}
                  </div>
                </button>
              </div>
              <div className="play-container">
                <button className="play-button" data-tip="Play song" onClick={this._toggleTrack}>
                  <i className="fa fa-play" aria-hidden="true"></i>
                  <div className="play-count">{0}</div>
                </button>
              </div>
            </div>

            <div className="comment-container">
              <div className="comment-counter">
                <i className="fa fa-comments" aria-hidden="true"></i>
                <div className="comment-count">{this.props.track.comments.length}</div>
              </div>
            </div>

          </div>

          <div className="track-text">
            {text}
          </div>
        </div>
        <ReactTooltip type="light" effect="solid" place="bottom"/>
      </li>);
  },

  _toggleTrack(){
    PlayerActions.toggleTrack(this.props.track);
    // if(!this.state.trackPlaying){
    //   if(!this.player){
    //     this.player = PlayerActions.playTrack(this.props.track);
    //   }
    //   else{
    //     this.player.play();
    //   }
    //   this.setState({trackPlaying: true});
    // }
    // else{
    //   PlayerActions.pauseTrack(this.player);
    //   this.setState({trackPlaying: false});
    // }
  }
});


module.exports = TrackIndexItem;
