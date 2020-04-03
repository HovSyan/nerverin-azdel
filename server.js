const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.post('/', (req, res) => {
  console.log(req);
  res.send('Hello World!');
});

app.listen(process.env.PORT || 8080, function () {
  console.log('Slack app listening on port 8080!');
});
