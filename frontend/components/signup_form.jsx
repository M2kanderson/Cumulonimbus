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
        <h2>Sign up</h2>
        <form onSubmit={this._createUser}>
          <div className="field">
            <label for="name">Name: </label><br />
            <input type="text" onChange={this._updateName}></input>
          </div>
          <div className="field">
            <label for="email">Email: </label><br />
            <input type="email" onChange={this._updateEmail}></input>
          </div>

          <div className="field">
            <label for="password">Password: </label><br />
            <input type="password" autoComplete="off"
                                   onChange={this._updatePassword}></input>
          </div>

          <div className="field">
            <label for="password_confirmation">Confirm Password: </label><br />
            <input type="password" autoComplete="off"
                   onChange={this._updatePassConfirm}></input>
          </div>

          <div className="actions">
            <input type="submit"></input>
          </div>
        </form>
      </Modal>

    );
  },

  closeModal: function() {
    this.props.closeForm();
    this.setState({modalIsOpen: false});
    // hashHistory.push('/');
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
module.exports = SignupForm;
