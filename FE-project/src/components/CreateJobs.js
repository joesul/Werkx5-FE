import React, { Component } from 'react';
// import { Link } from 'react-router';
import Helper from '../utils/Helper';
import '../stylesheets/CreateJobs.css';

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

        <form className="createTask" onSubmit={(event) => this.createJob(event)}>
          <h2 className='font-effect-wallpaper'>Create Job</h2>
        <ul className="createList">
          Job Name: <li><input onChange={(event) => this.setState({job_name: event.target.value})}/></li>
          Offer: <li><input onChange={(event) => this.setState({offer: event.target.value})}/></li>
          Zip Code: <li><input onChange={(event) => this.setState({zip: event.target.value})}/></li>
        Description: <li><textarea className="text" onChange={(event) => this.setState({description: event.target.value})}/></li>
      <button className="cJob" type="submit">Create</button>
        <div>{this.state.message}</div>
        </ul>
        </form>

    );
  }
}

export default CreateJobs;
