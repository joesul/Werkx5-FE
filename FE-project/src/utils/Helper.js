import axios from 'axios';

export default {

  zipcode: function(zipcode){
    console.log("search by zipcode", zipcode);
    return axios.get('http://localhost:3000/jobs/' + zipcode);
  },

  listed: function(uid) {
    console.log("search by uid", uid);
    return axios.get('http://localhost:3000/jobs/list/' + uid);
  },

  all: function() {
    console.log("helper view all");
    return axios.get('http://localhost:3000/jobs/');
  },

  add: function(job) {
    console.log("helper add job", job);
    return axios.post('http://localhost:3000/jobs/new', job);
  },

  take: function(jobId, data) {
    console.log("helper take job by ID", data.id);
    console.log("helper take job with userID", data.username)
    return axios.put('http://localhost:3000/jobs/take/' + data.id, data)
  },

  work: function(user) {
    console.log("helper work", user);
    return axios.get('http://localhost:3000/jobs/work/' + user);
  },

  delete: function(jobId, data) {
    console.log("helper take job by ID", data.id);
    console.log("helper take job with userID", data.username)
    return axios.delete('http://localhost:3000/jobs/' + jobId);
  },

  update: function(jobId) {
    console.log("helper update", jobId);
    return axios.put('http://localhost:3000/jobs/status/' + jobId)
  },

  grab: function(jobId) {
    console.log("helper grab", jobId);
    return axios.get('http://localhost:3000/jobs/forupdate/' + jobId)
  },

  edit: function(data) {
    console.log("helper", data);
    return axios.put('http://localhost:3000/jobs/edit/' + data.id, data)
  }
}
