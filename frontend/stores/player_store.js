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

PlayerStore.loadSong = function(track){
  if (_loadedSong){
    this.pauseSong();
  }
  const song = new Audio(track.audio_url);
  _trackUrl = track.audio_url;
  _loadedSong = song;
};

PlayerStore.playLoadedSong = function(){
  if (_loadedSong){
    _loadedSong.play();
    // Dismount the song 30 seconds after it begins playing. 30 seconds is constants
    // because every song listed is a 30 sec preview. Normally, this would be variable
    // based on the full song length
    this.timeout = setTimeout(this.clearSong, 30000);
  }
};

PlayerStore.clearSong = function(){
  _loadedSong = null;
  _trackUrl = null;
  clearTimeout(this.timeout);
};

PlayerStore.pauseSong = function(){
  if (_loadedSong) {
    _loadedSong.pause();
    this.clearSong();
  }
};

PlayerStore.__onDispatch = function(payload){
  switch (payload.actionType) {
    case PlayerConstants.TOGGLE_TRACK:
      if (payload.track.audio_url === _trackUrl) {
        this.pauseSong();
        this.__emitChange();
        break;
      } else {
        this.loadSong(payload.track);
        this.playLoadedSong();
        this.__emitChange();
        break;
      }
  }
};

module.exports = PlayerStore;
