import React, { Component } from 'react';
import { Link } from 'react-router';
import Image from './Image'
import LoginBtn from '../components/LoginBtn';
import Video from './Video'
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
           <h4 className="font-effect-wallpaper"><Link to="/signup">Sign Up</Link></h4>
           <LoginBtn />
          </div>
        </header>
       <div>
        {this.props.children}
       </div>
        {/*<Video />*/}
      </div>
    );
  }
}

export default App;
