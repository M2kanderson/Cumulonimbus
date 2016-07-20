module.exports = {
  fetchTracks(cb, failureCb){
    $.ajax({
      method: 'GET',
      url: '/api/tracks',
      success: (response) => {
        cb(response);
      },

      error: (response) => {
        failureCb(response);
      }
    });
  }
};
