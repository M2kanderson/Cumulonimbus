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
    this.playerListener = PlayerStore.addListener(this._onPlayerChange);
    TrackActions.fetchAllTracks();
    this.likeHeart = new Image(5, 5);
    this.likeHeart.src = ("https://s32.postimg.org/vmugd76md/Heart_Filled_128.png");
  },

  _onChange(){
    this.setState({tracks: TracksStore.allTracks()});
  },

  _onPlayerChange(){
    this.setState({currTrack: PlayerStore.loadedSong()});
  },

  render(){
    const numTracks = this.state.tracks.length;
    const numRows = Math.ceil(numTracks / 4);
    const rows = [];
    for (let i = 0; i < numRows; i++) { rows.push([]); }
    for (let i = 0; i < numTracks; i++) {
      const RowIndex = Math.floor(i / 4);
      rows[RowIndex].push(this.state.tracks[i]);
    }
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
        <div className= "music-player-container">
          {this.state.currTrack ? <MusicPlayer track={this.state.currTrack} src={url} /> : ""}
        </div>
      </div>
  );
  },

  componentWillUnmount(){
    this.trackListener.remove();
    this.playerListener.remove();
  }
});

module.exports = TracksIndex;
