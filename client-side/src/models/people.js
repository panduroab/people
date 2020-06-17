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
  async fetchCountEmailChar() {
    try {
      return await client.get('/people/count_email_characters');
    } catch (error) {
      throw error;
    }
  }
  async fetchPossibleDuplicated() {
    try {
      return await client.get('/people/possible_duplicated');
    } catch (error) {
      throw error;
    }
  }
}

export default People;