const React = require('react');
const Header = require('./header');
const Footer = require('./footer');
const Body = require('./body');
const SessionActions = require('../actions/session_actions');
const SessionStore = require('../stores/session_store');
const SessionConstants = require('../constants/session_constants');
const TrackActions = require('../actions/track_actions');
const PlayerStore = require('../stores/player_store');
const MusicPlayer = require('./music_player');

var App = React.createClass({
  // Devise with React
  getInitialState() {
    return { signedIn: null,
             currTrack: null};
  },

  // Devise with React
  componentDidMount() {
    // $.ajax({
    //   method: "GET",
    //   url: "/auth/is_signed_in.json"
    // })
    // .done(function(data){
    //   SessionActions.receiveUser(data.user);
    //   this.setState({ signedIn: data.signed_in });
    // }.bind(this));

    this.playerListener = PlayerStore.addListener(this._onPlayerChange);
  },

  _onPlayerChange(){
    this.setState({currTrack: PlayerStore.loadedSong()});
  },
  componentWillUnmount(){
    this.playerListener.remove();
  },
  setDuration(e){
    this.setState({trackDuration: e});
  },
  checkTime(currTime){
    if(currTime === this.state.trackDuration){
      console.log("hit it");
    }
  },

  render: function() {
    let url;
    if(this.state.currTrack){
      url = this.state.currTrack.audio_url +".mp3";
    }
    else {
      url = "";
    }
    return (
      <div className="app">
        <Header />
        <div className="body">
          {this.props.children}
        </div>
        <Footer />
          <div className= "music-player-container">
            {this.state.currTrack ?
              <MusicPlayer onDuration={this.setDuration}
                           onTimeUpdate={this.checkTime}
                           track={this.state.currTrack}
                           src={url} /> : ""}
          </div>
      </div>
    );
  }

});

window.SessionActions = SessionActions;
window.SessionStore = SessionStore;
window.TrackActions = TrackActions;
window.PlayerStore = PlayerStore;

module.exports = App;
