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
  },
  fetchTrack(id, success, failure){
    $.ajax({
      url: `api/tracks/${id}`,
      method: 'GET',
      success: (response) => {
        success(response);
      },
      error: (response) => {
        failure(response);
      }
    });
  },
  fetchFilteredTracks(query, cb, failureCb){
    $.ajax({
      method: 'GET',
      url: '/api/tracks',
      data: {query:query},
      success: (response) => {
        cb(response);
      },

      error: (response) => {
        failureCb(response);
      }
    });
  }
};
