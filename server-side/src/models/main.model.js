const axios = require('axios');
const API_HOST = process.env.API_HOST;
const API_KEY = process.env.API_KEY;
class MainModel {
  constructor() {
    this.clientApi = axios.create({
      baseURL: API_HOST
    });
    this.clientApi.defaults.headers.common['Authorization'] = `Bearer ${API_KEY}`;
  }
}

module.exports = MainModel;