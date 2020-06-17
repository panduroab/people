require('dotenv').config()
const PeopleModel = require('../../src/models/people.model');
const { expect } = require('chai');
const peopleModel = new PeopleModel();

describe('PeopleModel', () => {
  it('should return a people array from api', async () => {
    try {
      let people = await peopleModel.getPeople();
      expect(people).to.be.an('array');
      return people;
    } catch (error) {
      throw error;
    }
  });

  it('should count all characters on emails of a given people array', done => {
    try {
      const people = require('../example-data.json');
      const charTable = peopleModel.countEmailsCharacters(people);
      expect(charTable).to.be.an('array');
      done();
    } catch (error) {
      done(error)
    }
  });

  it('should return an array with possible duplicated emails', done => {
    try {
      const people = require('../example-data.json');
      const charTable = peopleModel.computePossibleDuplicatePeople(people);
      expect(charTable).to.be.an('array');
      done();
    } catch (error) {
      done(error)
    }
  });
});