exports.loaded = false;

const b = require('./b.js');

module.exports = {
  b,
  loaded: true,
};
