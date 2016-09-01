import React, { Component } from 'react';
// import { Link } from 'react-router';
import Helper from '../utils/Helper';
import '../stylesheets/JobsListed.css';

let uid = localStorage.getItem('uid')

class CreateJobs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: uid,
      job_name: "",
      zip: "",
      offer: "",
      description: "",
      message: ""
    }
  }

  createJob(event) {
    event.preventDefault();
    let job = this.state;
    Helper.add(job).then((res) => {
    console.log(res.data);
      this.setState({
        message: "Job Created!"
      });
    })
  }

  render() {
    return (
      <div className="create-jobs-wrapper">
        <form onSubmit={(event) => this.createJob(event)}>
          Create Job<br/>
          Job Name: <input onChange={(event) => this.setState({job_name: event.target.value})}/><br/>
          Offer: <input onChange={(event) => this.setState({offer: event.target.value})}/><br/>
          Zip Code: <input onChange={(event) => this.setState({zip: event.target.value})}/><br/>
          Description: <textarea onChange={(event) => this.setState({description: event.target.value})}/><br/>
        <button type="submit">Create</button><br/>
        <div>{this.state.message}</div>
        </form>
      </div>
    );
  }
}

export default CreateJobs;
