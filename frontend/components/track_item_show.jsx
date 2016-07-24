var React = require('react');
const TrackActions = require('../actions/track_actions');
const TrackStore = require('../stores/tracks_store');
const Comments = require('./comments');

var TrackItemShow = React.createClass({
  getInitialState: function() {
    TrackActions.fetchTrack(this.props.params.trackId);
    let potentialTrack = TrackStore.find(parseInt(this.props.params.trackId));
    return {
      track: potentialTrack ? potentialTrack : {}
    };
  },
  componentDidMount: function(){
    // let potentialTrack = TrackStore.find(parseInt(this.props.params.trackId));
    // this.setState({track: potentialTrack ? potentialTrack : {}});
  },
  componentWillReceiveProps(nextProps){
    let potentialTrack = TrackStore.find(parseInt(nextProps.params.trackId));
    this.setState({track: potentialTrack ? potentialTrack : {}});
  },
  render: function() {
    return (
      <div className="track-item-show">
        <p className="track-name">Title: <span>{this.state.track.title}</span></p>
        <p className="artist-name">Artist: <span>{this.state.track.artist}</span></p>
        <img className="track-cover" src={this.state.track.image_url}></img>
        <Comments trackId={this.state.track.id}></Comments>
      </div>
    );
  }

});

module.exports = TrackItemShow;
