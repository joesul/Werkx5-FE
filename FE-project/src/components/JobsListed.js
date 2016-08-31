import React, { Component } from 'react';
// import { Link } from 'react-router';
import '../stylesheets/JobsListed.css';

class JobsListed extends Component {
  // constructor(props) {
  //   super(props);
  //   }

  handJobsListed() {
    Helper.all().then((res) => {
      this.setState({
        response: res.data
      });
        console.log(res.data);
    });
  }

  render() {
    const jobsListed
    return (
      <div className="jobs-listed-wrapper">
        <button>View Jobs Listed</button>
      </div>
    );
  }
}

export default JobsListed;
