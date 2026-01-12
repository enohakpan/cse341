const dotenv = require('dotenv');
dotenv.config();

const express = require('express');
const bodyParser = require('body-parser');
const mongodb = require('./db/mongo');
const professionalRoutes = require('./routes/professional');

const port = process.env.PORT || 8080;
const app = express();

app
  .use(bodyParser.json())
  .use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    res.setHeader('Access-Control-Allow-Origin', '*');
    next();
  })
  .use('/professional', professionalRoutes);

mongodb.initDb((err, mongodb) => {
  if (err) {
    console.log(err);
  } else {
    app.listen(port);
    console.log(`Connected to DB and listening on ${port}`);
  }
});
