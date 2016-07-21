var React = require('react');
const Header = require('./header');
const Footer = require('./footer');
const Body = require('./body');
const SessionActions = require('../actions/session_actions');
const SessionStore = require('../stores/session_store');
const SessionConstants = require('../constants/session_constants');
const TrackActions = require('../actions/track_actions');

var App = React.createClass({
  // Devise with React
  getInitialState() {
    return { signedIn: null };
  },

  // Devise with React
  componentDidMount() {
    // $.ajax({
    //   method: "GET",
    //   url: "/auth/is_signed_in.json"
    // })
    // .done(function(data){
    //   SessionActions.receiveUser(data.user);
    //   this.setState({ signedIn: data.signed_in });
    // }.bind(this));
  },

  render: function() {
    return (
      <div className="app">
        <Header />
        <div className="body">
          {this.props.children}
        </div>
        <Footer />

      </div>
    );
  }

});

window.SessionActions = SessionActions;
window.SessionStore = SessionStore;
window.TrackActions = TrackActions;

module.exports = App;
