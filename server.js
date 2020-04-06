const express = require('express');
const path = require('path');

const mikoMessageService = require('./src/miko-message-service');

const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.post('/', (req, res) => {
  const message = mikoMessageService.getRandomMessage();
  res.writeHead(200, {'Content-Type': 'application/json'});
  res.end(JSON.stringify({
    response_type: "in_channel",
    text: message
  }))
});

app.listen(process.env.PORT || 8080, function () {
  console.log('Slack app listening on port 8080!');
});
