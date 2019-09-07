import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization:
      'Client-ID fc094b74b82d1d3d0c7af9e6b02b820a86eed5101bd2e4d7ff198b43bd6437b6'
  }
});
