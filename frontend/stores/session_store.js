const Dispatcher = require('../dispatcher/dispatcher');
const Store = require('flux/utils').Store;
const SessionConstants = require('../constants/session_constants');

const SessionStore = new Store(Dispatcher);

let _currentUser = {};

const _logout = function(){
  _currentUser = {};
};

const _login = function(currentUser){
  console.log("logging in current user");
  _currentUser = currentUser;
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
  }
};

SessionStore.currentUser = function(){
  return _currentUser;
};

SessionStore.isUserLoggedIn = function(){
  if (_currentUser === undefined) {
    return false;
  } else {
    return !!_currentUser.id;
  }
};

module.exports = SessionStore;
