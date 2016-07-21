const LikeApiUtil = {
  createLike: function(data, success){
    $.ajax({
      url: 'api/likes',
      type: 'POST',
      data:{like: data},
      success: success
    });
  },
  deleteLike: function(data, success){
    $.ajax({
      url: `api/likes/1`,
      type: 'DELETE',
      data: {like: data},
      success: success
    });
  }
};

module.exports = LikeApiUtil;
