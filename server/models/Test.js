var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TestSchema = new mongoose.Schema({
	user: String,
	Score: String,
	Percentage: String
});

var Test = mongoose.model('Test', TestSchema);