import React, { Component } from 'react';
import { Link } from 'react-router';
import LoginBtn from '../components/LoginBtn';
import logo from '../images/logo.jpg'
import '../stylesheets/App.css';


let play = "https://www.youtube.com/embed/NWpkNWvadcs"
class App extends Component {

  render() {
    return (
      <div>
        <header className="font-effect-wallpaper">
          <h1>WERKX5</h1>
          <img src={logo} />
          <div className="navi">
          <Link to="/">Home</Link><br/>
          <Link to="/signup">Sign Up</Link>
          <LoginBtn/>
          {this.props.children}
        </div>
        </header>
        <div className='vid'>
        <iframe width="1060" height="565" src="https://www.youtube.com/embed/NwHvv1ybkAo?controls=0&autoplay=1&showinfo=0&loop=1" frameborder="0" allowfullscreen ></iframe>
        </div>
    </div>
    );
  }
}

export default App;
