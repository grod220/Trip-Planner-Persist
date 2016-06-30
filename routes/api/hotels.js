var router = require('express').Router();
var Hotel = require('../../models/hotel');

router.get('/', function(req,res,next){
  // console.log('TEST');
  Hotel.findAll().then(function(data){
      res.send(data);
  });
});

router.get('/:id', function(req,res,next) {
  Hotel.findOne({
      where: {
        id: req.params.id
      }
    }).then(function(data) {
      res.send(data);
    });
});

module.exports = router;
