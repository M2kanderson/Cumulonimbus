const Dispatcher = require('../dispatcher/dispatcher');
const Store = require('flux/utils').Store;
const TrackConstants = require('../constants/track_constants');
const LikeConstants = require('../constants/like_constants');

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

TrackStore.addLike = function(trackId, userId){
  let track = _tracks[trackId];
  track.user_likes.push(parseInt(userId));
  track.like_count += 1;

};

TrackStore.removeLike = function(trackId, userId){
  let track = _tracks[trackId];
  let userIdx = track.user_likes.indexOf(parseInt(userId));
  track.like_count -= 1;
  track.user_likes.splice(userIdx, 1);
};

TrackStore.__onDispatch = function(payload){
  switch (payload.actionType) {
    case TrackConstants.FETCH_TRACKS:
      this.setTracks(payload.tracks);
      this.__emitChange();
      break;
    case LikeConstants.LIKE_RECEIVED:
      TrackStore.addLike(payload.like.track_id, payload.like.user_id);
      this.__emitChange();
      break;
    case LikeConstants.LIKE_REMOVED:
      TrackStore.removeLike(payload.like.track_id, payload.like.user_id);
      this.__emitChange();
      break;
  }
};

module.exports = TrackStore;
