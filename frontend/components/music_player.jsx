var React = require('react');

const withMediaPlayer = require('react-media-player').withMediaPlayer;
const controls = require('react-media-player').controls;
const { PlayPause, CurrentTime, Progress, SeekBar, Duration, MuteUnmute, Volume, Fullscreen } = controls;
const PlayPauseButton = require('./play_pause');
const MuteUnmuteButton = require('./mute_unmute');

var MusicPlayer = React.createClass({
  playPause(){

  },
  render: function() {
    const { Player, media } = this.props;
    return (
      <div className="music-player">
        <div onClick={() => this.playPause()}>
          {Player}
        </div>
        <nav className="media-controls">
          <div className="track-info">
            <p className="track-name">Now Playing: <span>{this.props.track.title}</span></p>
            <p className="artist-name">Artist: <span>{this.props.track.artist}</span></p>
          </div>
          <div className="track-controls">
            <img className="track-cover" src={this.props.track.image_url}></img>
            <PlayPauseButton className="media-control media-control--play-pause"/>
            <CurrentTime className="media-control media-control--current-time"/>
            <SeekBar className="media-control media-control--volume-range"/>
            <Duration className="media-control media-control--duration"/>
            <MuteUnmuteButton className="media-control media-control--mute-unmute"/>
            <Volume className="media-control media-control--volume"/>
          </div>

        </nav>
      </div>
    );
  }

});

module.exports = withMediaPlayer(MusicPlayer);
