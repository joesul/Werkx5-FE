import React, { Component } from 'react';
// import { Link } from 'react-router';
import Helper from '../utils/Helper';
import '../stylesheets/EditJob.css';

let uid = localStorage.getItem('uid');
let jobId = localStorage.getItem('jobId');

class EditJob extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: uid,
      id: jobId,
      job_name: "",
      zip: "",
      offer: "",
      description: "",
      message: ""
    }
  }

  componentDidMount() {
    Helper.grab(jobId).then((res) => {
      this.setState({
        job_name: res.data[0].job_name,
        zip: res.data[0].zip,
        offer: res.data[0].offer,
        description: res.data[0].description,
        message: ""
            });
        console.log("edit job", res.data[0].job_name);
    });
  }

  editJob(event) {
    event.preventDefault();
    let data = {
      job_name: this.state.job_name,
      zip: this.state.zip,
      offer: this.state.offer,
      description: this.state.description,
      id: this.state.id
    };
    Helper.edit(data).then((res) => {
      this.setState({
        message: "Job Edited!"
      });
    })
  }

  render() {
    let job = this;

    return (
      <div className="edit-jobs-wrapper">
        <form onSubmit={(event) => this.editJob(event)}>
          <ul>
          <h2>Edit Job</h2>
          <h3>Job Name: <li><input placeholder={job.state.job_name} onChange={(event) => this.setState({job_name: event.target.value})}/></li></h3>
          <h3>Offer: <li><input placeholder={job.state.offer} onChange={(event) => this.setState({offer: event.target.value})}/></li></h3>
          <h3>Zip Code: <li><input placeholder={job.state.zip} onChange={(event) => this.setState({zip: event.target.value})}/></li></h3>
          <h3>Description: <li><textarea className="editBox" placeholder={job.state.description} onChange={(event) => this.setState({description: event.target.value})}/></li></h3>
        <button className="jTaken" type="submit">Edit</button>
        </ul>
        <div>{this.state.message}</div>

        </form>
      </div>
    );
  }
}

export default EditJob;
