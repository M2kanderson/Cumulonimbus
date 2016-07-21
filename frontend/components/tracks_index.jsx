const React = require('react');
const TrackActions = require('../actions/track_actions');
const TracksStore = require('../stores/tracks_store');
const TrackIndexItem = require('./track_index_item');

const TracksIndex = React.createClass({
  getInitialState(){
    return ({tracks: []});
  },

  componentDidMount(){
    this.trackListener = TracksStore.addListener(this._onChange);
    TrackActions.fetchAllTracks();
  },

  _onChange(){
    this.setState({tracks: TracksStore.allTracks()});
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

    return (
      <ul id="tracks-index">
        {rows.map(row => {
          return (
            <div key={row[0].id} className="track-index-row">{
              row.map(track => {
                return <TrackIndexItem key={track.id} track={track}/>;
              })
            }</div>
          );
        })}
      </ul>
  );
  },

  componentWillUnmount(){
    this.trackListener.remove();
  }
});

module.exports = TracksIndex;
