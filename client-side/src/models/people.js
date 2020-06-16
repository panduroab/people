import axios from 'axios';
const client = axios.create({
  baseURL: process.env.REACT_APP_API_HOST,
  headers: {
    'content-type': 'application/json'
  }
});

class People {
  async fetch() {
    try {
      return await client.get('/people');
    } catch (error) {
      throw error;
    }
  }
}

export default People;