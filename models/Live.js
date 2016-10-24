var mongoose = require('mongoose');

var LiveSchema = new mongoose.Schema({
  name: String
});

module.exports = mongoose.model('Live', LiveSchema);
