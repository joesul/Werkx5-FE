import React, { Component } from 'react';
// import { Link } from 'react-router';
import firebaseUtils from '../utils/FirebaseUtils';
import Video from './Video'
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
      <div className="signUpForm">
        <div className="font-effect-wallpaper">
          <ul className="list">
            <li><h3>Sign Up</h3></li>
          Email: <li><input onChange={e => this.setState({email: e.target.value})}/></li>
           Password: <li><input onChange={e => this.setState({password: e.target.value})}/></li>
           Username: <li><input onChange={e => this.setState({userName: e.target.value})}/></li>
           First Name:<li> <input onChange={e => this.setState({firstName: e.target.value})}/></li>
           Last Name: <li><input onChange={e => this.setState({lastName: e.target.value})}/></li>
           Phone Number: <li><input onChange={e => this.setState({phone: e.target.value})}/></li>
         <button className="signUp" onClick={(event) => this.makeUser(event)}>Lets Make Me!</button>
           </ul>

        </div>

        </div>


    )
  }
}

export default Signup;
