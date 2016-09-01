import React, { Component } from 'react';
import { Link } from 'react-router';
import '../stylesheets/Profile.css';

class Profile extends Component {

  render() {
    return (
      <div className="profile-wrapper">
        <h1>Profile</h1>
        <h2><Link to="/createjobs">Create Job</Link></h2>
        <h2><Link to="/jobslisted">View Jobs I Have Listed</Link></h2>
        <h2><Link to="/searchjobs">Search Jobs</Link></h2>
        <h2><Link to="/jobslisted">View Jobs I Have Taken</Link></h2>
      </div>
    );
  }
}

export default Profile;
