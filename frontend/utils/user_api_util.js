const SessionActions = require('../actions/session_actions');

const UserApiUtil = {
  fetchAllUsers(success, error){
    $.ajax({
      url: 'api/users',
      type: 'GET',
      data_type: 'json',
      success: function(resp) {
        success(resp);
      },
      error: function(resp) {
        error("fetchAllUsers",resp);
      }
    });
  },
  fetchUser(id, success, error){
    $.ajax({
      url: `api/users/${id}`,
      type: 'GET',
      data_type: 'json',
      success: function(resp) {
        success(resp);
      },
      error: function(resp) {
        error("fetchUser",resp);
      }
    });
  },
  createUser(user, success, error){
    $.ajax({
      url: '/users.json',
      type: 'POST',
      data_type: 'json',
      data: {user: user},
      success: function(resp) {
        const userData = {
          email: user.email,
          password: user.password
        };
        SessionActions.login(userData);
        success(resp);
      },
      error: function(resp) {
        error("createUser",resp);
      }
    });
  },
  updateUser(user, success, error){
    $.ajax({
      url: `api/users/${user.id}`,
      type: 'PATCH',
      data_type: 'json',
      data: {user: user},
      success: function(resp) {
        success(resp);
      },
      error: function(resp) {
        error("updateUser",resp);
      }
    });
  },
  deleteUser(id,success, error){
    $.ajax({
      url: `api/users/${id}`,
      type: 'DELETE',
      data_type: 'json',
      success: function(resp) {
        success(resp);
      },
      error: function(resp) {
        error("deleteUser",resp);
      }
    });
  }
};


module.exports = UserApiUtil;
