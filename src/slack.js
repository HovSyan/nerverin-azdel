const request = require('request');
const appProperties = require('../application.properties.json');

const uri = appProperties["slack-message-post-url"];
const headers = {
  'Content-Type': 'application/json',
  'Authorization': `Bearer ${appProperties.token}`
};
const method = 'POST';

const options = {
  hostname: appProperties["slack-message-post-url"],
  headers: {
  }
};

const sendMessage = (message) => {
  const body = JSON.stringify({
    channel: appProperties.channel,
    text: message
  });

  return new Promise((resolve, reject) => {
    request({ headers, uri, body, method }, (err, res, body) => {
      if(err) {
        console.log(err);
        reject(err);
      }

      if(res) {
        resolve(body);
      }
    })
  })
};

module.exports = { sendMessage };
