var express = require('express');
var router = express.Router();
var fs = require('fs');

router.use(function(req, res, next){
  fs.readFile('./public/json/users.json', function(err, data){
    if(err) throw err;
    res.locals.users = JSON.parse(data);
    next();
  })
});

/* GET users listing. */
router.get('/all', function(req, res, next) {
  res.contentType("application/json");
  res.send(res.locals.users);
});

module.exports = router;
