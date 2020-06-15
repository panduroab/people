const express = require('express');
const cors = require('cors');
const app = new express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

/**
 * 404 Error
 */
app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

/**
 * Error handler
 */
app.use((err, req, res, next) => {
  res.status(err.status || 400);
  res.json({
    message: err.message,
    code: err.status
  });
});


module.exports = app;