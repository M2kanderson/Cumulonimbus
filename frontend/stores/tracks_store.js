const Dispatcher = require('../dispatcher/dispatcher');
const Store = require('flux/utils').Store;
const TrackConstants = require('../constants/track_constants');

const TrackStore = new Store(Dispatcher);

let _tracks = {};

TrackStore.allTracks = function(){
  let tracksArr = [];
  Object.keys(_tracks).forEach((key) => {
    tracksArr.push(_tracks[key]);
  });
  return tracksArr;
};

TrackStore.setTracks = function(tracks){
  _tracks = {};
  tracks.forEach((track) => {
    _tracks[track.id] = track;
  });
};

TrackStore.__onDispatch = function(payload){
  switch (payload.actionType) {
    case TrackConstants.FETCH_TRACKS:
      this.setTracks(payload.tracks);
      this.__emitChange();
      break;
  }
};

module.exports = TrackStore;
