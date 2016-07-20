const TrackApiUtils = require('../utils/track_api_utils');
const ErrorActions = require('./error_actions');
const Dispatcher = require('../dispatcher/dispatcher');
const TrackConstants = require('../constants/track_constants');

const TrackActions = {
  fetchAllTracks(){
    TrackApiUtils.fetchTracks(this.receiveTracks, ErrorActions.setErrors);
  },

  receiveTracks(tracks){
    Dispatcher.dispatch({
      actionType: TrackConstants.FETCH_TRACKS,
      tracks: tracks
    });
  }
};

module.exports = TrackActions;
