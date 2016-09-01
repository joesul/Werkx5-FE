import React, { Component } from 'react';
// import { Link } from 'react-router';
import Helper from '../utils/Helper';
import '../stylesheets/JobsListed.css';

let uid = localStorage.getItem('uid')

class SearchJobs extends Component {

  constructor(props) {
    super(props);
    this.state = {
      zip: "",
      id: "",
      username: uid,
      response: []
    }
  }

  handleViewAll() {
    Helper.all().then((res) => {
      this.setState({
        response: res.data
      });
        console.log(res.data);
    });
  }

  handleSearchByZip() {
    let zipcode = this.state.zip;
    Helper.zipcode(zipcode).then((res) => {
      this.setState({
        response: res.data
      });
    console.log(res.data);
    })
  }

  handleTakeJob(event, jobId) {
    let data = {
      id: jobId,
      username: this.state.username
    };
    Helper.take(jobId, data)
    .then((res) => {
      this.setState({
        response: res.data
      });
    console.log(res.data);
    })
  }

  render() {
    const jobs = this.state.response;
    let jobsList = this;
    return (
      <div className="search-jobs-wrapper">
        <button onClick={(event) => this.handleViewAll(event)}>View all Jobs</button><br/>
        Search by Zip Code: <input onChange={event => this.setState({zip: event.target.value})}/><br/>
        <button onClick={(event) => this.handleSearchByZip(event)}>Search</button>
        <ul>
          {jobs.map(function(jobs, index){
            return <li key={index}>Job Name: {jobs.job_name}, Offer: ${jobs.offer}, Description: {jobs.description}, Zipcode: {jobs.zip} <button onClick={(event) => jobsList.handleTakeJob(event, jobs.id)}>Take Job</button></li>
          })}
        </ul>
      </div>
    );
  }
}

export default SearchJobs;
