var React = require('react');

const withMediaPlayer = require('react-media-player').withMediaPlayer;
const controls = require('react-media-player').controls;
const { PlayPause, CurrentTime, Progress, SeekBar, Duration, MuteUnmute, Volume, Fullscreen } = controls;
const PlayPauseButton = require('./play_pause');

var MusicPlayer = React.createClass({
  playPause(){

  },
  render: function() {
    const { Player, media } = this.props;
    return (
      <div>
        <div onClick={() => this.playPause()}>
          {Player}
        </div>
        <nav className="media-controls">
          <PlayPauseButton className="media-control media-control--play-pause"/>
          <CurrentTime className="media-control media-control--current-time"/>
          <SeekBar className="media-control media-control--volume-range"/>
          <Duration className="media-control media-control--duration"/>
          <MuteUnmute className="media-control media-control--mute-unmute"/>
          <Volume className="media-control media-control--volume"/>
        </nav>
      </div>
    );
  }

});

module.exports = withMediaPlayer(MusicPlayer);
