const React = require('react');
const TrackActions = require('../actions/track_actions');
const TracksStore = require('../stores/tracks_store');
const PlayerStore = require('../stores/player_store');
const TrackIndexItem = require('./track_index_item');
const MusicPlayer = require('./music_player');

const TracksIndex = React.createClass({
  getInitialState(){
    return ({tracks: [],
            currTrack: null});
  },

  componentDidMount(){
    this.trackListener = TracksStore.addListener(this._onChange);
    // this.playerListener = PlayerStore.addListener(this._onPlayerChange);
    TrackActions.fetchAllTracks();
  },

  _onChange(){
    this.setState({tracks: TracksStore.allTracks()});
  },

  _onPlayerChange(){
    this.setState({currTrack: PlayerStore.loadedSong()});
  },

  render(){
    let url;
    if(this.state.currTrack){
      url = this.state.currTrack.audio_url +".mp3";
    }
    else {
      url = "";
    }

    return (
      <div id="tracks-index">
        <ul className = "tracks">
          {this.state.tracks.map(track => {
            return (
              <TrackIndexItem key={track.id} track={track}/>
            );
          })}
        </ul>

      </div>
  );
  },

  componentWillUnmount(){
    this.trackListener.remove();
    // this.playerListener.remove();
  }
});

module.exports = TracksIndex;
