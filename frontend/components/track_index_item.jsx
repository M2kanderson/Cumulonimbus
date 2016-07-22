const React = require('react');
const SessionStore = require('../stores/session_store');
const LikeActions = require('../actions/like_actions');
const PlayerActions = require('../actions/player_actions');

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
    let likeText = <img src="https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-ios7-heart-128.png" width="20" height="20"/>;
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

    if(this._isLiked() === <img src="https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-ios7-heart-128.png" width="20" height="20"/>){
      LikeActions.createLike(data);
    } else{
      LikeActions.deleteLike(data);
    }
  },
  render(){
    let text = this.props.track.title;
    if (this.props.track.artist) {
      text += ` - ${this.props.track.artist}`;
    }


    return (
      <li className="track-index-item">
        <div className="track-image">
          <img onClick={this._toggleTrack} src={this.props.track.image_url} width="225" height="225"></img>
          <span className="track-image-overlay" id={`overlay-${this.props.track.id}`}></span>
        </div>
        <div className="track-text">
          {text}
        </div>
        <div className="likes">
          Number of Likes: {this.props.track.like_count}
        </div>
        <button className="like-button" onClick={this.toggleLike}>{this._isLiked()}</button>
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
