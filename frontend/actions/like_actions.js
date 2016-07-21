const LikeApiUtil = require('../utils/like_api_util');
const LikeConstants = require('../constants/like_constants');
const AppDispatcher = require('../dispatcher/dispatcher');

const LikeActions = {
  createLike: function(data){
    LikeApiUtil.createLike(data, this.receiveLike);
  },

  deleteLike: function(data){
    LikeApiUtil.deleteLike(data, this.removeLike);
  },

  receiveLike: function(like){
    AppDispatcher.dispatch({
      actionType: LikeConstants.LIKE_RECEIVED,
      like: like
    });
  },
  removeLike: function(like){
    AppDispatcher.dispatch({
      actionType: LikeConstants.LIKE_REMOVED,
      like: like
    });
  }
};

module.exports = LikeActions;
