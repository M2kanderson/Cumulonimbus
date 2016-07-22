var React = require('react');
const withMediaProps = require('react-media-player').withMediaProps;
const PlayerStore = require('../stores/player_store');

var MuteUnmuteButton = React.createClass({
  getInitialState: function() {
    return {
      className:"media-control media-control--mute-unmute mute"
    };
  },
  componentDidMount(){
    this.playerListener = PlayerStore.addListener(this._onPlayerChange);
    this.setState({className:"media-control media-control--mute-unmute mute"});
  },
  _onPlayerChange(){
    this.setState({className:"media-control media-control--mute-unmute mute"});

  },
  componentWillUnmount(){
    this.playerListener.remove();
  },

  shouldComponentUpdate({ media }) {
    return this.props.media.isMuted !== media.isMuted;
  },

  _handleMuteUnmute(){
    if(!this.props.media.isMuted){
      this.setState({className:"media-control media-control--mute-unmute unmute"});
    }else {
      this.setState({className:"media-control media-control--mute-unmute mute"});
    }
    this.props.media.muteUnmute();
  },

  render() {
    const { className, style, media } = this.props;
    return (
      <div className="mute-unmute-background-circle">
        <button
          type="button"
          className={this.state.className}
          style={style}
          onClick={this._handleMuteUnmute}
        >
        </button>
      </div>

    );
  }

});

module.exports = withMediaProps(MuteUnmuteButton);
