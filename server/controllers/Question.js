var mongoose = require('mongoose');
var Question = mongoose.model('Question');
var User = mongoose.model('User');

module.exports = (function(){
	return {
		//this will grab all questions to select for quiz
		quiz: function(req, res){
			Question.find({}, function(err, questions){
				//find all Orders
				if (err){
					console.log(err)
				}
				else{
					res.send(JSON.stringify(questions));
				}
			})		// })
		},

		create: function(req, res){
			console.log('starting with......')
			 console.log(req.body)
			 var question = new Question({description: req.body.question, answer: req.body.answer, fake1: req.body.fake1, fake2: req.body.fake2});
			 question.save(function(err, result){
			 	if(err){
			 		console.log(er)
			 	}
			 	else{
			 		res.send(JSON.stringify(result));
			 	}
			 })
		},

		}
}) ()
