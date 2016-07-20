var React = require('react');
const LoginForm = require('./login_form');
const SessionActions = require('../actions/session_actions');

var Header = React.createClass({
  getInitialState: function() {
    return {
      login:false,
      signup:false
    };
  },
  toggleLogin(e){
    if(e){
      e.preventDefault();
    }
    this.setState({login: !this.state.login});
  },
  signOut(e){
    console.log("hi");
    window.FB.getLoginStatus((resp) => {
      if(resp.status === "connected"){
        window.FB.logout();
      }
    });
    SessionActions.logout();
    e.preventDefault();
  },
  signUp(e){
    if(e){
      e.preventDefault();
    }

    this.setState({signup: true});
  },
  render: function() {
    return (
      <div className="header">
        <img src="http://res.cloudinary.com/pulsr/image/upload/c_crop,y_0/v1468955200/Cumulonimbus/Cumulonimbus-logo.png"></img>
        <section className="header-buttons">
          <button className="button" onClick={this.toggleLogin}> Sign In</button>
          <button className="button"> Sign Up</button>
          <button className="button" onClick={this.signOut}> Log Out</button>
        </section>
        <LoginForm modalOpen={this.state.login} toggleForm={this.toggleLogin}/>
      </div>
    );
  }

});

module.exports = Header;
