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
      response: []
    }
  }

  handleJobsListed(event) {
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

    const jobs = this.state.response;

    return (
      <div className="jobs-listed-wrapper">
        <button onClick={(event) => this.handleJobsListed(event)}>View Jobs Listed</button>
        <ul>
          {jobs.map(function(jobs, index){
            return <li key={index}>Job Name: {jobs.job_name}, Offer: ${jobs.offer}, Description {jobs.description}</li>
          })}
        </ul>
      </div>
    );
  }
}

export default JobsListed;
