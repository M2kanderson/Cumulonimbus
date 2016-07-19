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

const appRouter = (
  <Router history={ hashHistory }>
    <Route path="/" component={ App }>
      <IndexRoute component={App}></IndexRoute>
      <Route path="/users/signup" component={SignupForm}></Route>
    </Route>
  </Router>
);


document.addEventListener('DOMContentLoaded', function() {
  const root = document.getElementById('content');
  ReactDOM.render(appRouter, root);
});
