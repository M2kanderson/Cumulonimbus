var React = require('react');
const withMediaProps = require('react-media-player').withMediaProps;

var PlayPauseButton = React.createClass({
  getInitialState: function() {
    return {
      className:"media-control media-control--play-pause play"
    };
  },

  shouldComponentUpdate({ media }) {
    return this.props.media.isPlaying !== media.isPlaying;
  },

  _handlePlayPause(){
    if(!this.props.media.isPlaying){
      this.setState({className:"media-control media-control--play-pause pause"});
    }else {
      this.setState({className:"media-control media-control--play-pause play"});
    }
    this.props.media.playPause();
  },

  render() {
    const { className, style, media } = this.props;
    console.log(style);
    return (
      <button
        type="button"
        className={this.state.className}
        style={style}
        onClick={this._handlePlayPause}
      >
      </button>
    );
  }

});

module.exports = withMediaProps(PlayPauseButton);
