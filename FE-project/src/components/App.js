import React, { Component } from 'react';
import { Link } from 'react-router';
import Image from './Image'
import LoginBtn from '../components/LoginBtn';
import '../stylesheets/App.css';


class App extends Component {

  render() {
    return (
      <div>
        <header className="header">
         <h1 className="font-effect-wallpaper">WERKX5</h1>
          <Image />
          <div className="navi">
           <Link to="/"><h4 className="font-effect-wallpaper">Home</h4></Link><br/>
           <Link to="/signup"><h4 className="font-effect-wallpaper">Sign Up</h4></Link>
           <Link to="/login"><h4 className="font-effect-wallpaper">Log In</h4></Link>
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
