const PeopleController = require('./controllers/people.controller');
const peopleCtrl = new PeopleController();
const Routes = (app) => {
  app.get('/people', peopleCtrl.getPeople());
  app.get('/people/count_email_characters', peopleCtrl.getCountEmailCharacters())
}
module.exports = Routes;