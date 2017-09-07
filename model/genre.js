var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var genreSchema = new Schema({
  title: String,
  description: String
});

var Genre = mongoose.model('Genre', genreSchema);
module.exports = Genre;
