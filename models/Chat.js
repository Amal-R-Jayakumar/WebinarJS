var mongoose = require('mongoose');

var ChatSchema = new mongoose.Schema({
	user: String,
    content: String,
	thread: String,
	date: { type: Date, default: new Date() }
});

module.exports = mongoose.model('Chat', ChatSchema);
