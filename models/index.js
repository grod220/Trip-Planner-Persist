var Sequelize = require('sequelize');
var db = require('./_db');

var Place = require('./place');
var Hotel = require('./hotel');
var Restaurant = require('./restaurant');
var Activity = require('./activity');
var Day = require('./day');
var day_restaurant = require('./day_restaurant');
var day_activity = require('./day_activity');

Hotel.belongsTo(Place);
Restaurant.belongsTo(Place);
Activity.belongsTo(Place);

Day.belongsTo(Hotel);
Day.belongsToMany(Restaurant, {through: day_restaurant});
Day.belongsToMany(Activity, {through: day_activity});


module.exports = db;
