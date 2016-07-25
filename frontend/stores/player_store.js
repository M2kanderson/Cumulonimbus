const Dispatcher = require('../dispatcher/dispatcher');
const Store = require('flux/utils').Store;
const PlayerConstants = require('../constants/player_constants');

const PlayerStore = new Store(Dispatcher);

// HOW TO USE THE PLAYER STORE:
// To play a song, first PlayerStore.loadSong(track). There should be a track.audio_url
// property which that function will read from.

// This loads the song without playing it, like you might load a vinyl into a record player.
// To actually play the song, call PlayerStore.playLoadedSong()

// To pause a song, call PlayerStore.pauseSong();

let _loadedSong = null;
let _trackUrl = null;
let _playing = false;


function _loadSong(track){
  _playing = true;
  _trackUrl = track.audio_url;
  _loadedSong = track;
}

PlayerStore.playLoadedSong = function(){
  if (_loadedSong){
    _loadedSong.play();
    // Dismount the song 30 seconds after it begins playing. 30 seconds is constants
    // because every song listed is a 30 sec preview. Normally, this would be variable
    // based on the full song length
    // this.timeout = setTimeout(this.clearSong, 30000);
  }
};

PlayerStore.clearSong = function(){
  _loadedSong = null;
  _trackUrl = null;
  // clearTimeout(this.timeout);
};

function _toggleSongPlay(){
  _playing = !_playing;
}

PlayerStore.__onDispatch = function(payload){
  switch (payload.actionType) {
    case PlayerConstants.TOGGLE_TRACK:
      if (payload.track.audio_url === _trackUrl) {
        _toggleSongPlay();
        this.__emitChange();
        break;
      } else {
        _loadSong(payload.track);
        // this.playLoadedSong();
        this.__emitChange();
        break;
      }
  }
};

PlayerStore.loadedSong = function(){
  return _loadedSong;
};

PlayerStore.songIsPlaying = function(trackId){
  return _loadedSong && _loadedSong.id === parseInt(trackId) && _playing;
};


module.exports = PlayerStore;
