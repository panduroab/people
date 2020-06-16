const PeopleModel = require('../models/people.model');

class PeopleController {
  constructor() {
    this.people = new PeopleModel();
  }
  getPeople = () => async (req, res) => {
    try {
      let people = await this.people.getPeople();
      return res.json(people);
    } catch (e) {
      throw e;
    }
  }
}
module.exports = PeopleController;