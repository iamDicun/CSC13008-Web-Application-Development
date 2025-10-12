const express = require('express');
const serverless = require('serverless-http');

const app = express();

const router = express.Router();
router.get('/', (req, res) => {
  res.send('Hello World!!! My name is Bui Duong Duy Cuong - 23127033');
});

app.use('/', router);

module.exports.handler = serverless(app);