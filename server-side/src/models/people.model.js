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
   * 
   */
  async getPossibleDuplicatePeople() {
    try {
      let people = await this.getPeople();
      return this.computePossibleDuplicatePeople(people);
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

  /**
   * Review the charCount array of each email and count the differences
   * @param {*} charCount1 
   * @param {*} charCount2 
   */
  isPossibleDuplicated(charCount1, charCount2) {
    let diff = 0;
    let lengthDiff = Object.keys(charCount1).length - Object.keys(charCount2).length;
    if (lengthDiff > 2 || lengthDiff < -2) {// more than 2 characters not allowed
      return false
    }
    for (let char of Object.keys(charCount1)) {
      if (diff > 2) {// 2 differences found
        break;
      }
      if (!charCount2[char]) { //char dont exist
        diff++;
        continue;
      }
      let charDiff = charCount1[char] - charCount2[char];
      if (charDiff >= 1 || charDiff <= -1) { //char exists but difference is bigger than 2
        diff++;
        continue;
      }
    }
    if (diff < 2) {
      return true;
    }
    return false;
  }

  /**
   * Analize every email of the array and looks for duplications
   * @param {*} people 
   */
  computePossibleDuplicatePeople(people) {
    let emails = [];
    let possibleDuplicated = [];
    people.forEach(person => {
      let splitted = person.email_address.split('');
      let emailChar = {};
      splitted.forEach(char => {
        emailChar[char] = (emailChar[char]) ? emailChar[char] + 1 : 1;
      });
      emails.push({ 'email': person.email_address, 'count': emailChar });
    });
    //Compare emails count chars with each other in the array
    for (let i = 0; i < emails.length; i++) {
      for (let k = i + 1; k < emails.length; k++) {
        if (this.isPossibleDuplicated(emails[i]['count'], emails[k]['count'])) {
          possibleDuplicated.push([emails[i]['email'], emails[k]['email']]);
        }
      }
    }
    return possibleDuplicated;
  }
}

module.exports = People;