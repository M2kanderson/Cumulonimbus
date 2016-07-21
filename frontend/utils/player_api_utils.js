module.exports = {
  playTrack(trackId, cb, failureCb){
    $.ajax({
      method: 'GET',
      url: `/api/tracks/${trackId}`,
      success: (response) => {
        cb(response);
      },

      error: (response) => {
        failureCb(response);
      }
    });
  }
};
