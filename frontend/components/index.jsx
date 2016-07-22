var React = require('react');
const MusicPlayer = require('./music_player');

var Index = React.createClass({

  render: function() {
    return (
      <div className="index">
        <div className="index-photo">
          <h1 className="index-header">Cumulonimbus</h1>
          <p className="index-desc">Great music. Anywhere. Any time.</p>
        </div>
        <MusicPlayer src={"https://p.scdn.co/mp3-preview/e881786aca1a5b3c8df35d94562cd90b329cb774" +".mp3"} />
      </div>
    );
  }

});

module.exports = Index;
