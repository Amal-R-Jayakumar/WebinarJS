var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
	user: String,
	thread: String
});

module.exports = mongoose.model('User', UserSchema);
