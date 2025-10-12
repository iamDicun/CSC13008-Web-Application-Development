const express = require('express');
const serverless = require('serverless-http');

const app = express();

const router = express.Router();
router.get('/', (req, res) => {
  res.send('Hello from Netlify!');
});

app.use('/.netlify/functions/hello', router);

module.exports.handler = serverless(app);