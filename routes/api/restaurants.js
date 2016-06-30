var router = require('express').Router();
var Restaurant = require('../../models/restaurant');

router.get('/', function(req,res,next){
  // console.log('TEST');
  Restaurant.findAll().then(function(data){
      res.send(data);
  });
});

router.get('/:id', function(req,res,next) {
  Restaurant.findOne({
      where: {
        id: req.params.id
      }
    }).then(function(data) {
      res.send(data);
    });
});

module.exports = router;
