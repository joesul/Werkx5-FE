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
           <Link to="/" className="home"><h3 className="font-effect-wallpaper">Home</h3></Link><br/>
           <Link to="/signup"><h3 className="font-effect-wallpaper">Sign Up</h3></Link>
           <Link to="/login"><h3 className="font-effect-wallpaper">Log In</h3></Link>
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
