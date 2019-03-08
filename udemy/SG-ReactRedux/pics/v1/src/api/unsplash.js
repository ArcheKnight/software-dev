import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID 0baa6a65ad4e6a6943091bf2b784ec936aa67461772b07b9da45840d62cd7539'
  }
})