var router = require('express').Router();
var Activity = require('../../models/activity');

router.get('/', function(req,res,next){
  // console.log('TEST');
  Activity.findAll().then(function(data){
      res.send(data);
  });
});

module.exports = router;
