const MainModel = require('./main.model');

class People extends MainModel {
  constructor() {
    super();
  }
  async getPeople() {
    try {
      let res = await this.clientApi
        .get('/people.json');
      return res.data.data;
    } catch (e) {
      throw e;
    }
  }
}

module.exports = People;