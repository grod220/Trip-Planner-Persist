var router = require('express').Router();
var Hotel = require('../../models/hotel');

router.get('/', function(req,res,next){
  // console.log('TEST');
  Hotel.findAll().then(function(data){
      res.send(data);
  });
});

module.exports = router;
