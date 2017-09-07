var express = require('express');
var router = express.Router();
var fs = require('fs');
var Genres = require('../model/genre');

router.post('/upload', function(req, res){
  var genres = new Genres({
    title: req.body.title,
    description: req.body.description
  });

  genres.save(function(err) {
        if (err)
           throw err;
        else
           res.send(genres);
           console.log('Save genre successfully...');
    });
});

module.exports = router;
