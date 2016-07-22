const React = require('react');
const LoginForm = require('./login_form');
const SignupForm = require('./signup_form');
const SessionActions = require('../actions/session_actions');
const Searchbar = require('./searchbar');
const hashHistory = require('react-router').hashHistory;

var Header = React.createClass({
  getInitialState: function() {
    return {
      login:false,
      signup:false
    };
  },
  openLogin(e){
    if(e){
      e.preventDefault();
    }
    this.setState({login: true});
  },
  closeLogin(e){
    if(e){
      e.preventDefault();
    }
    this.setState({login: false});
  },
  signOut(e){
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
  closeSignup(e) {
    if (e) {
      e.preventDefault();
    }

    this.setState({signup: false});
  },
  render: function() {
    return (
      <div className="header">
        <div className="header-left">
          <img id="logo" onClick={this.redirectHome} src="http://res.cloudinary.com/pulsr/image/upload/c_crop,y_0/v1468955200/Cumulonimbus/Cumulonimbus-logo.png"/>
        </div>
        <div className="header-right">
          <section className="header-buttons">
            <Searchbar />
            <button className="button" onClick={this.openLogin}> Sign In</button>
            <button className="button" onClick={this.signUp}> Sign Up</button>
            <button className="button" onClick={this.signOut}> Log Out</button>
          </section>
        </div>
        <LoginForm modalOpen={this.state.login} closeForm={this.closeLogin}/>
        <SignupForm modalOpen={this.state.signup} closeForm={this.closeSignup}/>

      </div>
    );
  },

  redirectHome(){
    hashHistory.push('/');
  }

});

module.exports = Header;
