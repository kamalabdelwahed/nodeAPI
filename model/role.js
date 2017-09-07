var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var roleSchema = new Schema({
  title: String,
  description: String
});

var Role = mongoose.model('Role', roleSchema);
module.exports = Role;
