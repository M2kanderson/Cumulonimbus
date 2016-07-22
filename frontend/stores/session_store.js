const Dispatcher = require('../dispatcher/dispatcher');
const Store = require('flux/utils').Store;
const SessionConstants = require('../constants/session_constants');
const LikeConstants = require('../constants/like_constants');
const hashHistory = require('react-router').hashHistory;

const SessionStore = new Store(Dispatcher);

let _currentUser = {};

const _logout = function(){
  _currentUser = {};
  hashHistory.push('/');
};

const _login = function(currentUser){
  _currentUser = currentUser;
  hashHistory.push('/tracks/all');
};

SessionStore.addLike = function(trackId){
  _currentUser.liked_tracks.push(parseInt(trackId));
};

SessionStore.removeLike = function(trackId){
  let trackIdx = _currentUser.liked_tracks.indexOf(parseInt(trackId));
  _currentUser.liked_tracks.splice(trackIdx, 1);
};

SessionStore.__onDispatch = function(payload){
  switch (payload.actionType) {
    case SessionConstants.LOGIN:
      _login(payload.userdata);
      this.__emitChange();
      break;
    case SessionConstants.LOGOUT:
      _logout();
      this.__emitChange();
      break;
    case LikeConstants.LIKE_RECEIVED:
      SessionStore.addLike(payload.like.track_id);
      this.__emitChange();
      break;
    case LikeConstants.LIKE_REMOVED:
      SessionStore.removeLike(payload.like.track_id);
      this.__emitChange();
      break;
  }
};

SessionStore.currentUser = function(){
  return _currentUser;
};

SessionStore.isUserLoggedIn = function(){
  if (_currentUser === undefined || Object.keys(_currentUser).length === 0) {
    return false;
  } else {
    return !!_currentUser.id;
  }
};

module.exports = SessionStore;
