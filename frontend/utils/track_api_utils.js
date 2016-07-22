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
