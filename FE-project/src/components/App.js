import React, { Component } from 'react';
import { Link } from 'react-router';
import Image from './Image'
import LoginBtn from '../components/LoginBtn';
import logo from '../images/logo.jpg'
import '../stylesheets/App.css';


<<<<<<< HEAD
let play = "https://www.youtube.com/embed/NWpkNWvadcs"
=======
>>>>>>> 3ad39e86a2bb3c5d937d92b7481f1efc97150a1c
class App extends Component {

  render() {
    return (
      <div>
<<<<<<< HEAD
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
=======
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
>>>>>>> 3ad39e86a2bb3c5d937d92b7481f1efc97150a1c
    );
  }
}

export default App;
