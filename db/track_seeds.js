const LOCAL_URL = 'http://localhost:3000';

function randomLetters (n) {
  let letters = "";
  for (let i = 0; i < n; i++) {
    const charCode = 97 + Math.floor(Math.random() * 26);
    letters += String.fromCharCode(charCode);
  }
  return letters;
}

function randomTrack (callBack) {
  jQuery.ajax({
    url: 'https://api.spotify.com/v1/search',
    data: {q: randomLetters(2), type: 'track', limit: 1},
    success: function (response) {
      callBack(response.tracks.items[0]);
    }
  });
}

function extractTrack (track) {
  return {title: track.name,
          artist: track.artist,
          audio_url: track.preview_url,
          image_url: track.album.images[1].url};
}

function postTrack (track, url) {
  jQuery.ajax({
    url: `${url}/api/tracks/anonymous`,
    method: 'POST',
    dataType: 'JSON',
    data: {track: extractTrack(track)},
    success (newTrack) {
    },
    error (errors) {
    }
  });
}

function seed (numTrack, url) {
  let images = [];
  let tracks = [];
  let titles = [];
  let artists = [];
  let k = numTrack;
  for (let i = 0; i < numTrack; i++) {
    randomTrack(function (track) {
      images.push(track.album.images[1].url);
      tracks.push(track.preview_url);
      titles.push(track.name);
      artists.push(track.artists[0].name);
      k--;
      console.log(k);
      if (k <= 0) {
        console.log(images);
        console.log(tracks);
        console.log(titles);
        console.log(artists);
      }
    });
  }
}


seed(100, LOCAL_URL);
