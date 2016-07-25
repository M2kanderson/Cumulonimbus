const React = require('react');
const ReactDOM = require('react-dom');

const ReactRouter = require('react-router');
const Router = ReactRouter.Router;
const Route = ReactRouter.Route;
const IndexRoute = ReactRouter.IndexRoute;
const hashHistory = ReactRouter.hashHistory;

//components
const App = require('./components/app.jsx');
const SignupForm = require('./components/signup_form');
const LoginForm = require('./components/login_form');
const TracksIndex = require('./components/tracks_index');
const Index = require('./components/index');
const TracksFiltered = require('./components/tracks_filtered');
const TrackItemShow = require('./components/track_item_show');

const SessionActions = require('./actions/session_actions');

const appRouter = (
  <Router history={ hashHistory }>
    <Route path="/" component={ App }>
      <IndexRoute component={Index}></IndexRoute>
      <Route path="/users/signup" component={SignupForm}/>
      <Route path="/users/login" component={LoginForm}/>
      <Route path="tracks/all" component={TracksIndex}/>
      <Route path="tracks/filtered" component={TracksFiltered}/>
      <Route path="tracks/:trackId" component={TrackItemShow}/>
    </Route>
  </Router>
);

let getCurrentUser = function(cb){
  $.ajax({
    method: "GET",
    url: "/auth/is_signed_in.json"
  })
  .done(function(data){
    if (data.signed_in) {
      SessionActions.receiveUser(data.user);
    }
    cb();
  }.bind(this));
};

let renderApp = function(){
  const root = document.getElementById('content');
  ReactDOM.render(appRouter, root);
};

document.addEventListener('DOMContentLoaded', function() {
  getCurrentUser(renderApp);
});
