import React, { Component } from 'react';
import { Link } from 'react-router';
import Image from './Image'
import LoginBtn from '../components/LoginBtn';
import logo from '../images/logo.jpg'
import '../stylesheets/App.css';

class App extends Component {

  render() {
    return (
      <div>
        <header className="header">
         <h1 className="font-effect-wallpaper">WERKX5</h1>
          <Image />
          <div className="navi">
           <Link to="/" className="home"><h2 className="font-effect-wallpaper">Home</h2></Link><br/>
           <Link to="/signup"><h2 className="font-effect-wallpaper">Sign Up</h2></Link>
           <Link to="/login"><h2 className="font-effect-wallpaper">Log In</h2></Link>
          </div>
        </header>
       <div>
        {this.props.children}
       </div>
      </div>
    );
  }
}

export default App;
