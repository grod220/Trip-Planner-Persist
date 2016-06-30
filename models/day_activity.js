var Sequelize = require('sequelize');
var db = require('./_db');

var day_activity = db.define('day_activity', {
  started: Sequelize.BOOLEAN
});

module.exports = day_activity;
