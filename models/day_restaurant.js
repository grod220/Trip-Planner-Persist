var Sequelize = require('sequelize');
var db = require('./_db');

var day_restaurant = db.define('day_restaurant', {
  started: Sequelize.BOOLEAN
});

module.exports = day_restaurant;
