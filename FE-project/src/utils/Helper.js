import axios from 'axios';

export default {
  name: function(unicorn){
    return axios.get('http://localhost:3000/unicorns/' + unicorn);
  },

  all: function(){
    return axios.get('http://localhost:3000/unicorns/');
  },

  add: function(unicorn) {
    console.log(unicorn);
    return axios.post('http://localhost:3000/unicorns/new', unicorn);
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
