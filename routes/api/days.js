var router = require('express').Router();
var Days = require('../../models/day');
var day_restaurants = require('../../models/day_restaurant');

router.get('/', function(req,res,next){
  //console.log('TEST');
  Days.findAll().then(function(data){
      res.send(data);
  });
});


router.get('/:id', function(req, res){
  console.log(req.params.id);
  var dayToFind = req.params.id;
  Days.findOne({
    where : {
      id : dayToFind
    }
  }).then(function(foundDay){
    res.send(foundDay);
  })
  .catch(function(err){
    console.log(err);
  })
});

router.post('/:number', function(req, res, next){
  console.log("Nah we them boys ", req.params.number);
  var dayToBuild = req.params.number;
  Days.create({
    number : dayToBuild
  })
  .then(function(data){
    res.send(data);
  })
  .catch(function(err){
    console.log(err);
  })
});

router.delete('/:id', function(req, res){
  console.log("We will delete you!");
  var idToFind = req.params.id;
  Days.findOne({
    where : {
      id : idToFind
    }
  })
  .then(function(foundDay){
    return foundDay.destroy();
  })
  .then(function(blah){
    res.end();
  })
  .catch(function(err){
    console.log(err);
  })
});

router.post('/:id/restaurants', function(req, res , next){
  console.log("They didn't interfere", req.body.id);
  var idForModel = req.params.id;
  day_restaurants.create({
    dayId : idForModel,
    restaurantId : req.body.id
  })
  .then(function(created){
    res.send(created);
  })
  .catch(function(err){
    console.log(err);
  })
});

router.delete('/:id/restaurants', function(req, res){
  console.log("We will delete you and restaurants!");
  var idToDelete = req.params.id;
  day_restaurants.findOne({
    where : {
      id : idToFind,
      restaurantId : req.body.id
    }
  })
  .then(function(foundDay){
    return foundDay.destroy();
  })
  .then(function(blah){
    res.end();
  })
  .catch(function(err){
    console.log(err);
  })
});




module.exports = router;

