import React, { Component } from 'react';
// import { Link } from 'react-router';
import '../stylesheets/LoginBtn.css';

class LoginBtn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loginStatus: "Login"
    }
  }

  handleLogin(event) {
    if (localStorage.getItem("uid")) {
      console.log("nice");
    }
  }


  render() {
    return (
      <div className="LoginBtn">
        <button onClick={(event)=> this.handleLogin.bind(this)}>{this.state.loginStatus}</button>
      </div>
    );
  }
}

export default LoginBtn;
