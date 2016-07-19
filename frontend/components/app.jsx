var React = require('react');

var App = React.createClass({

  render: function() {
    console.log("test");
    return (
      <div>
      Hello World!
      {this.props.children}
      </div>
    );
  }

});

module.exports = App;
