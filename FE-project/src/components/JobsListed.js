import React, { Component } from 'react';
// import { Link } from 'react-router';
import Helper from '../utils/Helper';
import '../stylesheets/JobsListed.css';

let uid = localStorage.getItem('uid')

class JobsListed extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: uid,
    }
  }

  handJobsListed(event) {
    let user = this.state.username
    console.log(user);
    Helper.listed(user).then((res) => {
      this.setState({
        response: res.data
      });
        console.log(res.data);
    });
  }

  render() {
    return (
      <div className="jobs-listed-wrapper">
        <button onClick={(event) => this.handJobsListed(event)}>View Jobs Listed</button>
      </div>
    );
  }
}

export default JobsListed;
