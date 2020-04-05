const express = require('express');
const path = require('path');

const mikoMessageService = require('./src/miko-message-service');
const slackService = require('./src/slack');

const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.post('/', (req, res) => {
  const message = mikoMessageService.getRandomMessage();
  slackService.sendMessage(message)
    .then(
      result => res.send('Done: ' + result)
    )
    .catch(e => {
      console.log(e);
      res.send(e);
    });
});

app.listen(process.env.PORT || 8080, function () {
  console.log('Slack app listening on port 8080!');
});
