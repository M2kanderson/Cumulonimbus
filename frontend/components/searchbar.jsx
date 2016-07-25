const React = require('react');
const ReactRouter = require('react-router');
const hashHistory = ReactRouter.hashHistory;
const SessionStore = require('../stores/session_store');
const LoginForm = require('./login_form');


const Searchbar = React.createClass({
  getInitialState: function() {
    return {
      query: "",
      login: false
    };
  },
  updateQuery(e){
    this.setState({query:e.target.value});
  },
  openLogin(){
    this.props.myFunc();
  },
  _ensureLoggedIn(nextState, replace){
    if(!SessionStore.isUserLoggedIn())
    {
      this.openLogin();
      return false;
    }
    return true;
  },
  search(e){
    if (this._ensureLoggedIn()){
      e.preventDefault();
      let search = this.state.query;
      hashHistory.push({
        pathname: "tracks/filtered",
        query: {search:search}
      });
      this.setState({query:""});
    }
  },
  trySearch(e){
    if(e.keyCode === 13)
    {
      this.search(e);
    }

  },
  render: function() {
    return (
      <div className="searchbar">
        <div className="search-icon">
          <input type="button" onClick={this.search}
                 className="search-icon-img"></input>
        </div>
        <div className="search-field">

          <input type="text"
                 onChange={this.updateQuery}
                 onKeyUp={this.trySearch}
                 value={this.state.query}
                 placeholder="Song title or artist e.g. Michael Jackson"></input>
        </div>
      </div>

    );
  }

});

module.exports = Searchbar;
