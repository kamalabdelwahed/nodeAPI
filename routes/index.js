var express = require('express');
var router = express.Router();

router.use(function(req, res, next){
  var moment = new Date();
  var today = moment.toDateString();
  console.log("Today's date is: "+today);
  next();
});
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
