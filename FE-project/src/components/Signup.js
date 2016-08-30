import React, { Component } from 'react';
// import { Link } from 'react-router';
import firebaseUtils from '../utils/FirebaseUtils';
import '../stylesheets/Signup.css';

class Signup extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      userName: "",
      firstName: "",
      lastname: "",
      phone: 0,
      zipcode: 0
    }
  }

  logOut(event) {
    firebaseUtils.SignOut(event);
    console.log("User has signed out!");
  }

  makeUser(event, email, password, obj) {
      firebaseUtils.SignUp(this.state.email, this.state.password, this.state);
  }

  render() {
    return (
      <div>
        <h1>SIGN UP</h1>
        <ul>
          <li> Email: <input onChange={e => this.setState({email: e.target.value})}/> </li>
          <li> Password: <input onChange={e => this.setState({password: e.target.value})}/> </li>
          <li> Username: <input onChange={e => this.setState({userName: e.target.value})}/> </li>
          <li> First Name: <input onChange={e => this.setState({firstName: e.target.value})}/></li>
          <li> Last Name: <input onChange={e => this.setState({lastName: e.target.value})}/></li>
          <li> Phone Number: <input onChange={e => this.setState({phone: e.target.value})}/></li>
        </ul>
        <button onClick={(event) => this.makeUser(event)}>Lets Make Me!</button>
        </div>
    )
  }
}

export default Signup;
