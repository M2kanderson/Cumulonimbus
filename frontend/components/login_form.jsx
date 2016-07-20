const React = require('react');
const Modal = require('react-modal');
const Link = require('react-router').Link;
const hashHistory = require('react-router').hashHistory;
const SessionActions = require('../actions/session_actions');
const SessionStore = require('../stores/session_store');
const ErrorsStore = require('../stores/errors_store');
const ErrorActions = require('../actions/error_actions');
// const SessionConstants = require('./constants/session_constants');
import FacebookLogin from 'react-facebook-login';

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
          <Link className="form-top-text" to='signup'>Need an account?</Link>
          <h1 className="form-text">Sign in to Cumulonimbus</h1>
          {this.fieldErrors()}
          <label className="form-text">Enter your <span className="bolded">email</span> and <span className="bolded">password</span>.</label><br/>
          <div>
            <button type="button" className="demo-button" onClick={this.demoLogin} value="Demo Login">Demo Login</button>
          </div>
            <input className="session-textbox text-input" placeholder="email" onChange={this.changeUsername} type="text" value={this.state.email}></input>
            <input className="session-textbox text-input" placeholder="password" onChange={this.changePassword} type="password" value={this.state.password}></input>
            <input id="login" className="session-button" type="submit" value="Sign In"></input>
              <FacebookLogin appId="1790155654560761"
                             autoLoad={true} fields="name,email,picture"
                             callback={this.responseFacebook}
                             cssClass="facebook-button"
                             icon="fa-facebook"></FacebookLogin>

          <br/>
          <Link className="form-bottom-text" to='/'>Home</Link>
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
    this.props.toggleForm();
    this.setState({modalIsOpen: false});
    hashHistory.push('/');
  },

  demoLogin(e) {
    e.preventDefault();
    // SessionActions.logIn({
    //   email: SessionConstants.DEMO_USERNAME,
    //   password: SessionConstants.DEMO_PASSWORD
    // });
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
