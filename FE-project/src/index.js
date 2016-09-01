import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import App from './components/App';
import Login from './components/Login';
import Profile from './components/Profile';
import Signup from './components/Signup';
import JobsTaken from './components/JobsTaken';
import JobsListed from './components/JobsListed';
import EditJob from './components/EditJob';
import CreateJobs from './components/CreateJobs';
import SearchJobs from './components/SearchJobs';
import './stylesheets/index.css';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <Route path="/login" component={Login} />
      <Route path="/profile" component={Profile} />
      <Route path="/signup" component={Signup} />
      <Route path="/jobstaken" component={JobsTaken} />
      <Route path="/jobslisted" component={JobsListed} />
      <Route path="/jobslisted/edit" component={EditJob} />
      <Route path="/createjobs" component={CreateJobs} />
      <Route path="/searchjobs" component={SearchJobs} />
    </Route>
  </Router>,
  document.getElementById('root')
);
