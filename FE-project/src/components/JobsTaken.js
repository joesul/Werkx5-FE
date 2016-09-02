import React, { Component } from 'react';
// import { Link } from 'react-router';
import Helper from '../utils/Helper';
import '../stylesheets/JobsTaken.css';

let uid = localStorage.getItem('uid')

class JobsTaken extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: uid,
      job_status: "",
      response: []
    }
  }

  handleWorkList(event) {
    let user = this.state.username
    console.log(user);
    Helper.work(user).then((res) => {
      this.setState({
        response: res.data
      });
    });
  }

  handleJobFinished(event, jobId) {
    Helper.update(jobId).then((res) => {
      this.setState({
        response: res.data
      })
    });
  }

  render() {
    const jobs = this.state.response;
    let jobsList = this;

    return (
      <div className="jobs-taken-wrapper">
        <ul className="tList">
        <button className="jTaken" onClick={(event) => this.handleWorkList(event)}>View Work List</button>
          {jobs.map(function(jobs, index){
            return <li key={index}>
              <li><h2>Job Name: {jobs.job_name}</h2></li>
              <li><h2>Offer: ${jobs.offer}</h2></li>
              <li><h2>Description: {jobs.description} </h2></li>
              <li><h2>Job Status:  {!jobs.job_status ? "Ongoing" : jobs.job_status}</h2></li>
              <button className="jTaken" onClick={(event) => jobsList.handleJobFinished(event, jobs.id)}>Job Finished</button></li>
          })}
        </ul>
      </div>
    );
  }
}

export default JobsTaken;
