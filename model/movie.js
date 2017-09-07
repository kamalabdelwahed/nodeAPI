var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var movieSchema = new Schema({
  title: String,
  year: Number,
  imageUrl: String,
  synopsis: String,
  genre: String
});

var Movie = mongoose.model('Movie', movieSchema);
module.exports = Movie;
