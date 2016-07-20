var React = require('react');

var Index = React.createClass({

  render: function() {
    return (
      <div className="index">
        <div className="index-photo">
          <h1 className="index-header">Cumulonimbus</h1>
          <p className="index-desc">Great music anywhere and any time.</p>
        </div>
      </div>
    );
  }

});

module.exports = Index;
