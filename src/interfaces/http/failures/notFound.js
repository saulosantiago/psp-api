const HttpStatus = require('http-status-codes');

const notFound = (req, res, details) => res.status(HttpStatus.NOT_FOUND).send({
  error: details,
  method: req.method,
  url: req.originalUrl,
});

module.exports = notFound;
