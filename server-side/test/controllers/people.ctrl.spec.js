require('dotenv').config()
const chai = require('chai');
const expect = chai.expect;
const chaiHttp = require('chai-http');
chai.use(chaiHttp);

const app = require('../../index');

describe('People API', () => {
  it('should return a people array', async () => {
    try {
      let res = await chai.request(app)
        .get('/people');
      expect(res).to.have.status(200);
      expect(res.body).to.be.an('array');
      return res;
    } catch (error) {
      throw error;
    }
  });

  it('should return a emails count characters array', async () => {
    try {
      let res = await chai.request(app)
        .get('/people/count_email_characters');
      expect(res).to.have.status(200);
      expect(res.body).to.be.an('array');
      return res;
    } catch (error) {
      throw error;
    }
  });

  it('should return an array of possible duplicated emails', async () => {
    try {
      let res = await chai.request(app)
        .get('/people/possible_duplicated');
      expect(res).to.have.status(200);
      expect(res.body).to.be.an('array');
      return res;
    } catch (error) {
      throw error;
    }
  });
});