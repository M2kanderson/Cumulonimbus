const Dispatcher = require('../dispatcher/dispatcher');
const Store = require('flux/utils').Store;
const PlayerConstants = require('../constants/player_constants');

const PlayerStore = new Store(Dispatcher);

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
    setTimeout(this.clearSong, 30000);
  }
};

PlayerStore.clearSong = function(){
  _loadedSong = null;
  _trackUrl = null;
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
