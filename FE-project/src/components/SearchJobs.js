import React, { Component } from 'react';
// import { Link } from 'react-router';
import Helper from '../utils/Helper';
import '../stylesheets/JobsListed.css';

class SearchJobs extends Component {

  constructor(props) {
    super(props);
    this.state = {
      zip: "",
      response: ""
    }
  }

  handViewAll() {
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

  render() {
    return (
      <div className="search-jobs-wrapper">
        <button onClick={(event) => this.handViewAll(event)}>View all Jobs</button><br/>
        Search by Zip Code: <input onChange={event => this.setState({zip: event.target.value})}/><br/>
        <button onClick={(event) => this.handleSearchByZip(event)}>Search</button>
      </div>
    );
  }
}

export default SearchJobs;
