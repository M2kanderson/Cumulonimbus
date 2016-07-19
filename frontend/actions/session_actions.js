const Dispatcher = require('../dispatcher/dispatcher');
const SessionApiUtils = require('../utils/session_api_utils');
const SessionConstants = require('../constants/session_constants.js');

const SessionActions = {
  login(userData) {
    console.log("logging in");

    SessionApiUtils.login(userData, this.receiveUser);
  },

  receiveUser(userData) {
    debugger
    console.log("receiving response");
    Dispatcher.dispatch({
      actionType: SessionConstants.LOGIN,
      userdata: userData
    });
  }
};


module.exports = SessionActions;
