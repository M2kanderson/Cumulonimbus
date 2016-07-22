var React = require('react');
const withMediaProps = require('react-media-player').withMediaProps;
const PlayerStore = require('../stores/player_store');

var PlayPauseButton = React.createClass({
  getInitialState: function() {
    return {
      className:"media-control media-control--play-pause play"
    };
  },
  componentDidMount(){
    this.playerListener = PlayerStore.addListener(this._onPlayerChange);
    this.props.media.play();
    this.setState({className:"media-control media-control--play-pause pause"});
  },
  _onPlayerChange(){
    PlayerStore.pauseSong();
    setTimeout(() =>{
      this.setState({className:"media-control media-control--play-pause pause"});
      this.props.media.play();
    }, 0);

  },
  componentWillUnmount(){
    this.playerListener.remove();
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
