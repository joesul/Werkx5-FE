import React, {Component} from 'react'

class Video extends Component {
  render(){
    return(
    <div className='vid'>
    <iframe width="1060" height="565" src="https://www.youtube.com/embed/NwHvv1ybkAo?controls=0&autoplay=1&showinfo=0&loop=1" frameborder="0" allowfullscreen ></iframe>
    </div>
  )
  }
}

export default Video
