import React, { Component } from 'react';
import { Link } from 'react-router';
import LoginBtn from '../components/LoginBtn';
import '../stylesheets/App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <div className="header">
          <h1>APP NAME</h1>
          <Link to="/">Home</Link><br/>
          <Link to="/signup">Sign Up</Link>
          <LoginBtn />
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default App;
