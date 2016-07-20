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
    return (
      <ul>
      {this.state.tracks.map((track) => {
        return (<TrackIndexItem track={track} key={track.id}/>);
      })}
    </ul>
  );
  },

  componentWillUnmount(){
    this.trackListener.remove();
  }
});

module.exports = TracksIndex;
