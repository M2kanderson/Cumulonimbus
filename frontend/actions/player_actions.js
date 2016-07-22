const Dispatcher = require('../dispatcher/dispatcher');
const PlayerConstants = require('../constants/player_constants');

module.exports = {
  toggleTrack(track){
    Dispatcher.dispatch({
      actionType: PlayerConstants.TOGGLE_TRACK,
      track: track
    });
  },
};
