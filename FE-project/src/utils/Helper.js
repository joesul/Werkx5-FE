import axios from 'axios';

export default {

  zipcode: function(zipcode){
    console.log("helper by zipcode", zipcode);
    return axios.get('http://localhost:3000/jobs/' + zipcode);
  },

  listed: function(uid) {
    console.log("uid", uid);
    return axios.get('http://localhost:3000/jobs/' + uid);
  },

  all: function() {
    console.log("helper view all");
    return axios.get('http://localhost:3000/jobs/');
  },

  add: function(job) {
    console.log("helper", job);
    return axios.post('http://localhost:3000/jobs/new', job);
  },

  delete: function(unicorn) {
    console.log(unicorn);
    return axios.delete('http://localhost:3000/unicorns/' + unicorn);
  },

  update: function(unicorn) {
    console.log(unicorn.name);
    return axios.put('http://localhost:3000/unicorns/' + unicorn.name, unicorn)
  }
}
