import React, { Component } from 'react';
// import { Link } from 'react-router';
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
  }

  render() {
    return (
      <div className="login-wrapper">
        <div>
          <h2>Login</h2>
          <ul>
            <li>Email: <input onChange={(e) => this.setState({email: e.target.value})}/></li>
            <li>Password: <input type="password" onChange={(e) => this.setState({password: e.target.value})}/></li>
            <button onClick={(event) => this.logIn(event)}>Submit</button>
          </ul>
        </div>
      </div>
    );
  }
}

export default Login;
