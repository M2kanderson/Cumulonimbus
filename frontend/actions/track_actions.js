const TrackApiUtils = require('../utils/track_api_utils');
const ErrorActions = require('./error_actions');
const Dispatcher = require('../dispatcher/dispatcher');
const TrackConstants = require('../constants/track_constants');

const TrackActions = {
  fetchAllTracks(){
    TrackApiUtils.fetchTracks(this.receiveTracks, ErrorActions.setErrors);
  },
  fetchTrack(id){
    TrackApiUtils.fetchTrack(id, this.receiveTrack, ErrorActions.setErrors);
  },
  fetchFilteredTracks(query){
    TrackApiUtils.fetchFilteredTracks(query, this.receiveTracks, ErrorActions.setErrors);
  },

  receiveTracks(tracks){
    Dispatcher.dispatch({
      actionType: TrackConstants.TRACKS_RECEIVED,
      tracks: tracks
    });
  },
  receiveTrack(track){
    Dispatcher.dispatch({
      actionType: TrackConstants.TRACK_RECEIVED,
      track: track
    });
  }
};

module.exports = TrackActions;
