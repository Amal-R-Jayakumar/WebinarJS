var mongoose = require('mongoose');

var ChatSchema = new mongoose.Schema({
	user: String,
    content: String,
	thread: String,
	hour: String,
	minutes: String
});

module.exports = mongoose.model('Chat', ChatSchema);
