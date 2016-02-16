var User = require('./../controllers/Users.js');
var Question = require('./../controllers/Question.js');
var Test = require('./../controllers/Test.js')


var mongoose = require('mongoose');

module.exports = function(app){
	//get all users
	app.get('/showUsers', function(req, res){
		User.show(req, res);
	});

	app.post('/newUser', function(req, res){
		User.create(req, res);
	});

	app.get('/showQuestions', function(req, res){
		Question.quiz(req, res);
	});

	app.post('/newQuestion', function(req, res){
		Question.create(req, res);
	});

	app.get('/showTests', function(req, res){
       Test.index(req, res) 
    });

	// app.post('/', function(req, res){
	// 	User.findOne(req, res);
	// })

	app.post('/addTest', function(req, res){
		Test.create(req, res);
	})


}