var express = require('express');
var router = express.Router();
var fs = require('fs');
var Movies = require('../model/movie');

router.post('/upload', function(req, res){
  var movies = new Movies({
    title: req.body.title,
    year: req.body.year,
    imageUrl: req.body.imageUrl,
    synopsis: req.body.synopsis,
    genre: req.body.genre
  });

  movies.save(function(err) {
        if (err)
           throw err;
        else
           res.send(movies);
           console.log('Save movie successfully...');
    });
});

module.exports = router;
