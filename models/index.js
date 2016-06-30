var Sequelize = require('sequelize');
var db = require('./_db');

var Place = require('./place');
var Hotel = require('./hotel');
var Restaurant = require('./restaurant');
var Activity = require('./activity');
var Day = require('./day');


Hotel.belongsTo(Place);
Restaurant.belongsTo(Place);
Activity.belongsTo(Place);

var day_restaurant = db.define('day_restaurant', {
  started: Sequelize.BOOLEAN
});

var day_activity = db.define('day_activity', {
  started: Sequelize.BOOLEAN
});

Day.belongsTo(Hotel);
Day.belongsToMany(Restaurant, {through: day_restaurant});
Day.belongsToMany(Activity, {through: day_activity});


module.exports = db;
