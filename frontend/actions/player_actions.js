module.exports = {
  playTrack(track){
    const song = new Audio(track.audio_url);
    song.play();
  }
};
