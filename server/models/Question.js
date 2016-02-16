var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var QuestionSchema = new mongoose.Schema({
	description: String,
	answer: String,
	fake1: String,
	fake2: String,
	number: Number
});

var Question = mongoose.model('Question', QuestionSchema);