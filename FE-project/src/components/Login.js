import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import firebaseUtils from '../utils/FirebaseUtils';
import '../stylesheets/Login.css';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    }
  }

  logOut(event) {
    firebaseUtils.SignOut(event);
    console.log("User has signed out!");
  }

  logIn(event, email, password) {
    firebaseUtils.SignIn(this.state.email, this.state.password)
      console.log("User has logged in!");
      browserHistory.push("/profile");
  }

  render() {
    return (
      <div className="font-effect-wallpaper">
        <div className="list">
          <h2>Login</h2>
          <ul>
            Email: <li><input onChange={(e) => this.setState({email: e.target.value})}/></li>
            Password:<li> <input type="password" onChange={(e) => this.setState({password: e.target.value})}/></li>
          <button className="myButton" onClick={(event) => this.logIn(event)}>Submit</button>
          </ul>
        </div>
      </div>
    );
  }
}

export default Login;
