const PeopleController = require('./controllers/people.controller');
const peopleCtrl = new PeopleController();
const Routes = (app) => {
  app.get('/people', peopleCtrl.getPeople());
}
module.exports = Routes;