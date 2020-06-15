require('dotenv').config();
const app = require('./app');
const listen = app.listen(process.env.APP_PORT || 3001, () => {
  console.log(`App running at: ${process.env.APP_HOST}:${listen.address().port}`);
});
module.exports = app;