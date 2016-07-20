var React = require('react');
const LoginForm = require('./login_form');
const SessionActions = require('../actions/session_actions');
const Searchbar = require('./searchbar');

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
        <div className="header-left">
          <img src="http://res.cloudinary.com/pulsr/image/upload/c_crop,y_0/v1468955200/Cumulonimbus/Cumulonimbus-logo.png"></img>
        </div>
        <div className="header-right">
          <section className="header-buttons">
            <Searchbar />
            <button className="button" onClick={this.toggleLogin}> Sign In</button>
            <button className="button"> Sign Up</button>
            <button className="button" onClick={this.signOut}> Log Out</button>
          </section>
        </div>
        <LoginForm modalOpen={this.state.login} toggleForm={this.toggleLogin}/>
      </div>
    );
  }

});

module.exports = Header;
