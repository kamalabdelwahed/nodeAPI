var express = require('express');
var router = express.Router();
var fs = require('fs');
var Actors = require('../model/actor');

router.post('/upload', function(req, res){
  var actors = new Actors({
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    birthday: req.body.birthday
  });

  actors.save(function(err) {
        if (err)
           throw err;
        else
           res.send(actors);
           console.log('Save actor successfully...');
    });
});

module.exports = router;
