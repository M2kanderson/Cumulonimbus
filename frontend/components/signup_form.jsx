const React = require('react');
const UserActions = require('../actions/user_actions');
const Modal = require('react-modal');
const Link = require('react-router').Link;
const hashHistory = require('react-router').hashHistory;

const SignupForm = React.createClass({
  getInitialState: function() {
    return {
      email: "",
      // uid: "",
      password: "",
      password_confirmation: "",
      modalIsOpen: false
      // name: ""
    };
  },
  _updateName(e){
    // this.setState({name: e.target.value});
  },
  _updateEmail(e){
    this.setState({email:e.target.value});
  },
  _updatePassword(e){
    this.setState({password:e.target.value});
  },
  _updatePassConfirm(e){
    this.setState({password_confirmation:e.target.value});
  },
  _createUser(e){
    e.preventDefault();
    UserActions.createUser(this.state);
  },
  render: function() {
    return (
      <Modal
        isOpen={this.props.modalOpen}
        onAfterOpen={this.afterOpenModal}
        onRequestClose={this.closeModal}
        style={customStyles}
        >
        <form className="session-form" onSubmit={this._createUser}>
          <h2 className="form-text">Sign up</h2>
          <label className="form-text">Enter your <span className="bolded">email</span> and <span className="bolded">password</span>.</label>
          <div className="field">
            <input className="session-textbox" placeholder="Your email" type="email" onChange={this._updateEmail}></input>
          </div>

          <div className="field">
            <input className="session-textbox" placeholder="Password" type="password" autoComplete="off"
                                   onChange={this._updatePassword}></input>
          </div>

          <div className="field">
            <input className="session-textbox" placeholder="Confirm password" type="password" autoComplete="off"
                   onChange={this._updatePassConfirm}></input>
          </div>

          <div className="actions">
            <button className="session-button" type="submit">Submit</button>
          </div>
        </form>
      </Modal>

    );
  },

  closeModal: function() {
    this.props.closeForm();
    this.setState({modalIsOpen: false});
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
  },

  overlay: {
    zIndex                : 2
  }
};
module.exports = SignupForm;
