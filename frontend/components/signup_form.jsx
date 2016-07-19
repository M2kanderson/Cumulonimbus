const React = require('react');
const UserActions = require('../actions/user_actions');

const SignupForm = React.createClass({
  getInitialState: function() {
    return {
      email: "",
      password: "",
      password_confirmation: ""
    };
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
      <div>
        <h2>Sign up</h2>
        <form onSubmit={this._createUser}>
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
      </div>

    );
  }

});

module.exports = SignupForm;
