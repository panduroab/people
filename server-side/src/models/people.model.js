const MainModel = require('./main.model');

class People extends MainModel {
  constructor() {
    super();
  }

  /**
   * Get a list of people from API endpoint
   */
  async getPeople() {
    try {
      let res = await this.clientApi
        .get('/people.json');
      return res.data.data;
    } catch (e) {
      throw e;
    }
  }

  /**
   * Get count email characters
   */
  async getCountEmailsCharacters() {
    try {
      let people = await this.getPeople();
      return this.countEmailsCharacters(people);
    } catch (e) {
      throw e;
    }
  }

  /**
   * Count all characters of people's email
   * @param {Array} people 
   * @returns {Object} Sorted char list
   */
  countEmailsCharacters(people) {
    let charCount = {};
    people.forEach(person => {
      person.email_address.split('').forEach(char => {
        charCount[char] = (charCount[char]) ? charCount[char] + 1 : 1;
      });
    });
    return Object.keys(charCount)
      .map(key => ({ [key]: charCount[key] }))
      // Array.prototype.sort() allows you to implement a compare function
      .sort((a, b) => (Object.values(b)[0] - Object.values(a)[0]));
  }
}

module.exports = People;