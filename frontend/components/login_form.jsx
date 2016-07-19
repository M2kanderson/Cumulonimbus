const React = require('react');
const Modal = require('react-modal');
const Link = require('react-router').Link;
const hashHistory = require('react-router').hashHistory;
const SessionActions = require('../actions/session_actions');
// const SessionConstants = require('./constants/session_constants');

const LoginForm = React.createClass({
  getInitialState(){
    return{username: "", password: "", modalIsOpen: false};
  },

  componentWillMount() {
      Modal.setAppElement('body');
   },

  componentDidMount(){
    this.setState({modalIsOpen: true});
  },

  render(){
    return (
      <Modal
        isOpen={this.state.modalIsOpen}
        onAfterOpen={this.afterOpenModal}
        onRequestClose={this.closeModal}
        style={customStyles}
        >
        <form className="session-form" onSubmit={this.handleSubmit}>
          <Link className="form-top-text" to='signup'>Need an account?</Link>
          <h1 className="form-text">Sign in to Cumulonimbus</h1>
          <label className="form-text">Enter your <span className="bolded">email</span> and <span className="bolded">password</span>.</label><br/>
          <div>
            <button type="button" className="demo-button" onClick={this.demoLogin} value="Demo Login">Demo Login</button>
          </div>
            <input className="session-textbox text-input" placeholder="username" onChange={this.changeUsername} type="text" value={this.state.username}></input>
            <input className="session-textbox text-input" placeholder="password" onChange={this.changePassword} type="password" value={this.state.password}></input>
            <input id="login" className="session-button" type="submit" value="Sign In"></input>
          <br/>
          <Link className="form-bottom-text" to='/'>Home</Link>
        </form>
      </Modal>
  );},

  changeUsername(e){
    this.setState({username: e.target.value});
  },

  changePassword(e){
    this.setState({password: e.target.value});
  },

  handleSubmit(e) {
    e.preventDefault();
    const userData = {
      username: this.state.username,
      password: this.state.password
    };
    SessionActions.logIn(userData);
  },

  openModal: function() {
    this.setState({modalIsOpen: true});
  },

  closeModal: function() {
    this.setState({modalIsOpen: false});
    hashHistory.push('/');
  },

  demoLogin(e) {
    e.preventDefault();
    // SessionActions.logIn({
    //   username: SessionConstants.DEMO_USERNAME,
    //   password: SessionConstants.DEMO_PASSWORD
    // });
  }

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
