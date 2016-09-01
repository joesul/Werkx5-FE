import React, { Component } from 'react';
import { Link } from 'react-router';
import '../stylesheets/Profile.css';

class Profile extends Component {

  render() {
    return (
      <div className="profile-wrapper">
       <ul>
        <li><h2 className="profile">Welcome</h2></li>
        <li><Link to="/createjobs"><h3 className="font-effect-wallpaper">Post a Task</h3></Link></li>
        <li><Link to="/jobslisted"><h3 className="font-effect-wallpaper">View Listings</h3></Link></li>
        <li><Link to="/searchjobs"><h3 className="font-effect-wallpaper">Search Tasks</h3></Link></li>
        <li><Link to="/jobstaken"><h3 className="font-effect-wallpaper">Tasks Completed</h3></Link></li>
       </ul>
      </div>
    );
  }
}

export default Profile;
