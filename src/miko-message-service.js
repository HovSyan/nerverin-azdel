const MIKO_MESSAGES = require('../application.properties.json')["miko-messages"];

const getRandomMessage = () => {
  const length = MIKO_MESSAGES.length;

  return MIKO_MESSAGES[Math.floor(Math.random() * length)]
};

module.exports = { getRandomMessage };
