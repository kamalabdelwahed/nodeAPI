var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var actorSchema = new Schema({
  first_name: String,
  last_name: String,
  birthday: Number
});

var Actor = mongoose.model('Actor', actorSchema);
module.exports = Actor;
