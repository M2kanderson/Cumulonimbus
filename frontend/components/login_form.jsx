const React = require('react');
const Modal = require('react-modal');
const hashHistory = require('react-router').hashHistory;
const SessionActions = require('../actions/session_actions');
const SessionStore = require('../stores/session_store');
const ErrorsStore = require('../stores/errors_store');
const ErrorActions = require('../actions/error_actions');
const SessionConstants = require('../constants/session_constants');
// const SessionConstants = require('./constants/session_constants');
import FacebookLogin from 'react-facebook-login';
// const FacebookLogin = require('react-facebook-login');

const LoginForm = React.createClass({
  getInitialState(){
    return{email: "", password: "", modalIsOpen: false};
  },

  componentWillMount() {
      Modal.setAppElement('body');
   },

  componentDidMount(){
    this.loginListener = SessionStore.addListener(this._onChange);
    this.errorListener = ErrorsStore.addListener(this.forceUpdate.bind(this));
    // this.setState({modalIsOpen: true});
  },
  componentWillUpdate(){
    // this.setState({modalIsOpen: this.props.modalOpen});
  },

  facebookLogin(){
    SessionActions.facebookLogin();
  },
  googleLogin(e){
    e.preventDefault();
    SessionActions.googleLogin();
  },
  responseFacebook(response){
    window.FB.getLoginStatus((resp) =>{
      console.log(resp);
      if (resp.status === 'connected') {
        console.log("connected");
        console.log(response);
    // Logged into your app and Facebook.
      } else if (resp.status === 'not_authorized') {
        console.log("not authorized");
        console.log(response);
        // The person is logged into Facebook, but not your app.
      } else {
        console.log("other");
        // The person is not logged into Facebook, so we're not sure if
        // they are logged into this app or not.
      }
    });

  },

  render(){
    return (
      <Modal
        isOpen={this.props.modalOpen}
        onAfterOpen={this.afterOpenModal}
        onRequestClose={this.closeModal}
        style={customStyles}
        >
        <form className="session-form" onSubmit={this.handleSubmit}>
          <h2 className="form-text">Sign in to Cumulonimbus</h2>
            {this.fieldErrors()}
          <label className="form-text">Enter your <span className="bolded">email</span> and <span className="bolded">password</span>.</label><br/>
          <div className="actions">
            <button type="button" className="session-button" onClick={this.demoLogin} value="Demo Login">Demo Login</button>
          </div>

          <div className="field">
            <input className="session-textbox" placeholder="Your email" onChange={this.changeUsername} type="text" value={this.state.email}></input>
          </div>

          <div className="field">
            <input className="session-textbox" placeholder="Password" onChange={this.changePassword} type="password" value={this.state.password}></input>
          </div>

          <div className="actions">
            <input id="login" className="session-button" type="submit" value="Sign In"></input>
          </div>

          <div className="actions">
            <button className="session-button" onClick={this.facebookLogin}>Log in facebook</button>
          </div>

          <div className="actions">
            <button className="session-button" onClick={this.googleLogin}>Log in Google</button>
          </div>

              <FacebookLogin appId="1790155654560761"
                             autoLoad={true} fields="name,email,picture"
                             callback={this.responseFacebook}
                             cssClass="facebook-button"
                             icon="fa-facebook"></FacebookLogin>

          <br/>
        </form>
      </Modal>
  );},

  changeUsername(e){
    this.setState({email: e.target.value});
  },

  changePassword(e){
    this.setState({password: e.target.value});
  },

  handleSubmit(e) {
    console.log("handling submit");
    e.preventDefault();
    const userData = {
      email: this.state.email,
      password: this.state.password
    };
    SessionActions.login(userData);
  },

  _onChange() {
    this.closeModal();
  },

  openModal: function() {
    this.setState({modalIsOpen: true});
  },

  closeModal: function() {
    this.props.closeForm();
    this.setState({modalIsOpen: false});
    // hashHistory.push('/');
  },

  demoLogin(e) {
    e.preventDefault();
    SessionActions.login({
      email: SessionConstants.DEMO_USERNAME,
      password: SessionConstants.DEMO_PASSWORD
    });
  },

  componentWillUnmount(){
    this.loginListener.remove();
    this.errorListener.remove();
    ErrorActions.clearErrors();
    this.setState({email: "", password: ""});
  },

  fieldErrors() {
    const errors = ErrorsStore.formErrors("login");
    if (!errors["login"]) { return; }
    return <ul><li className="session-error-message">{ errors["login"] }</li></ul>;
    // return <ul>{ messages }</ul>;
  },

  });

  const customStyles = {
  content : {
  top                   : '50%',
  left                  : '50%',
  right                 : 'auto',
  bottom                : 'auto',
  marginRight           : '-50%',
  transform             : 'translate(-50%, -50%)'
  }
};

module.exports = LoginForm;
