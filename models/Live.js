var mongoose = require('mongoose');

var LiveSchema = new mongoose.Schema({
	name: String,
	youtube: String,
	date: String,
	displayDate: String,
	atelier: { type: String, default: "http://lescuresdedith.com/produit/sejour-retour-a-soi/" },
	profilage: { type: String, default: "http://lescuresdedith.com/produit/audit-alimentaire/" },
});

module.exports = mongoose.model('Live', LiveSchema);
