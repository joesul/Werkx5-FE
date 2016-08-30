import React, { Component } from 'react';
// import { Link } from 'react-router';
import '../stylesheets/JobsListed.css';

class SearchJobs extends Component {

  render() {
    return (
      <div className="search-jobs-wrapper">
        <input onChange={this.handleChange.bind(this)}></input>
      </div>
    );
  }
}

export default SearchJobs;
