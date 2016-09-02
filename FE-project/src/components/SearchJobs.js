import React, { Component } from 'react';
// import { Link } from 'react-router';
import Helper from '../utils/Helper';
import '../stylesheets/SearchJobs.css';

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
        <h2>Search by Zip Code: <input onChange={event => this.setState({zip: event.target.value})}/></h2><br/>
      <button className="sJobs" onClick={(event) => this.handleSearchByZip(event)}>Search</button>
        <button className="sJobs" onClick={(event) => this.handleViewAll(event)}>View all Jobs</button><br/>
        <ul>
          {jobs.map(function(jobs, index){
            return <li key={index}>
              <li><h3>Job Name: {jobs.job_name}</h3></li>
            <li><h3>Offer: ${jobs.offer}</h3></li>
          <li><h3>Description: {jobs.description}</h3></li>
        <li><h3>Zipcode: {jobs.zip}</h3></li>
          <button className="sJobs" onClick={(event) => jobsList.handleTakeJob(event, jobs.id)}>Take Job</button></li>
          })}
        </ul>
      </div>
    );
  }
}

export default SearchJobs;
