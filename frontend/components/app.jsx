var React = require('react');

var App = React.createClass({
  // Devise with React
  getInitialState() {
    return { signedIn: null };
  },

  // Devise with React
  componentDidMount() {
    $.ajax({
      method: "GET",
      url: "/auth/is_signed_in.json"
    })
    .done(function(data){
      this.setState({ signedIn: data.signed_in });
    }.bind(this));
  },

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
