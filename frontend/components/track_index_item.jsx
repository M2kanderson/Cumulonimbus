const React = require('react');

const TrackIndexItem = React.createClass({
  render(){
    let text = this.props.track.title;
    if (this.props.track.artist) {
      text += ` - ${this.props.track.artist}`;
    }

    return (<li className="track-index-item">
        <div className="track-image">
          <img src={this.props.track.image_url} width="225" height="225"></img>
          <span className="track-image-overlay" id={`overlay-${this.props.track.id}`}></span>
        </div>
        <div className="track-text">
          <p>{text}</p>
        </div>
    </li>);
  }
});

module.exports = TrackIndexItem;
