// Dependencies
const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const Slack = require('slack-api');

// Set up environment variables and database
const PORT = process.env.PORT || 8080;

// Initialize express
const app = express();
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public'));

// app.get('/', (req, res) => {
//   res.sendFile(`${__dirname}/public/index.html`);
// });

app.listen(PORT, () => {
  console.log('App running on port', PORT);
});
