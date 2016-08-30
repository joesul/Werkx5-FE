import React, { Component } from 'react';
// import { Link } from 'react-router';
import '../stylesheets/JobsListed.css';

class CreateJobs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      description: "",
      offer: 0,
      zip: 0
    }
  }

  render() {
    return (
      <div className="create-jobs-wrapper">
      </div>
    );
  }
}

export default CreateJobs;
