const Dispatcher = require('../dispatcher/dispatcher');
const SessionApiUtils = require('../utils/session_api_utils');
const SessionConstants = require('../constants/session_constants.js');

const SessionActions = {
  login(userData) {
    console.log("logging in");

    SessionApiUtils.login(userData, this.receiveUser);
  },
  facebookLogin(){
    SessionApiUtils.facebookLogin(this.receiveUser);
  },

  receiveUser(userData) {
    Dispatcher.dispatch({
      actionType: SessionConstants.LOGIN,
      userdata: userData
    });
  },

  logout() {
    SessionApiUtils.logout(this.removeCurrentUser);
  },

  removeCurrentUser() {
    Dispatcher.dispatch({
      actionType: SessionConstants.LOGOUT
    });
  }
};


module.exports = SessionActions;
