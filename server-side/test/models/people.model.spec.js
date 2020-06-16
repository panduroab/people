require('dotenv').config()
const PeopleModel = require('../../src/models/people.model');
const { expect } = require('chai');

describe('PeopleModel',()=>{
  it('should return a people array from api', async () =>{
    const peopleModel = new PeopleModel();
    try {
      let people = await peopleModel.getPeople();
      expect(people).to.be.an('array');
      return people;
    }catch (error){
      throw error;
    }
  });
});